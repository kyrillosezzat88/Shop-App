import * as yup from 'yup';
import 'yup-phone'
export const CheckOutSchema = yup.object().shape({
    address:yup.string().required('Address Required!'),
    phone:yup.string().phone('EG',"Please Enter Valid Phone").required('Phone required!'),
    email:yup.string().email("Please Enter Valid Email").required("email required !")
});