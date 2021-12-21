export default function validateInfo(values) {
    let errors = {}
    if (!values.username.trim()) {
        errors.username = "Nazwa użytkownika jest wymagana"
    }
    if (!values.email) {
        errors.email = "Email jest wymagany"
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = "Email jest niepoprawny"
    }
    if (!values.password) {
        errors.password = "Hasło jest wymagane"
    } else if (values.password.length < 6) {
        errors.password = "Hasło musi zawierać minimum 6 znaków"
    }
    if (!values.password2) {
        errors.password2 = "Hasło jest wymagane"
    } else if (values.password != values.password2) {
        errors.password2 = "Hasła muszą być takie same"
    }
    return errors;
}