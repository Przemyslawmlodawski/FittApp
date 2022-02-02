const Exercises = require('../models/exercisesModel')



const exerciseCtrl = {
    addExercise: async (req, res) => {
        try {
            const { name, description, reps, category, status, avatar } = req.body
            if (!name || !description || !reps || !category || !status)
                return res.status(400).json({ msg: 'Please Fill all the fields' })

            const exercise = await Exercises.findOne({ name })
            if (exercise) return res.status(400).json({ msg: "This exercise already exists" })

            const newExercise = new Exercises({
                name, description, reps, category, status, avatar
            })

            await newExercise.save()

            res.json({ msg: "Exercise Added! Please check your exercise list" })

        } catch (error) {
            return res.status(500).json({ msg: error.message })
        }
    },
    deleteExercise: async (req, res) => {
        try {
            await Exercises.findOneAndDelete({ _id: req.params.id })


            res.json({ msg: "Exercise Success Deleted" })
        } catch (error) {
            return res.status(500).json({ message: error.message })
        }
    },
    getExercises: async (req, res) => {
        try {
            console.log(req.exercise)
            const exercise = await Exercises.find()
            res.json(exercise)
        } catch (error) {
            return res.status(500).json({ message: error.message })
        }
    },

}


module.exports = exerciseCtrl