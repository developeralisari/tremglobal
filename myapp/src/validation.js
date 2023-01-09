import * as Yup from 'yup';

const validationSchema = Yup.object({
    name: Yup.string()
        .min(2, 'En az 2 karakter olmalıdır.')
        .max(15, 'En fazla 15 karakter olmalıdır.')
        .required('Gerekli'),
    email: Yup.string().email('Invalid email').required('Required')
});

export default validationSchema;