import useStore from '@/utils/store'
import { TSignupPayload } from '@/utils/store/slices/auth/types'
import {useCallback, useEffect, useState} from 'react'
import useCustomForm from '@/components/common/forms/Form/useCustomForm'
import {FieldValues, SubmitHandler} from 'react-hook-form'
import {loginFields} from './fields'
import {useRouter} from 'next/router'
import useNotification, {ENotificationType} from '@/utils/hooks/useNotification'

const useLogic = () => {

	const {
		loading,
		error,
  signup,
  authenticated
	} = useStore(
		(state) => ({
			loading: state.loading,
			error: state.error,
   signup: state.signup,
   authenticated: state.authenticated
		})
	)

 const router = useRouter()
 const {NotificationContextHolder, openNotification} = useNotification()
	const [authenticating, setAuthenticating] = useState(false)

 const submitHandler: SubmitHandler<FieldValues> = useCallback(
		async (formData) => {
   setAuthenticating(true)
			// sent to api
   signup(formData as TSignupPayload)
		},
		[signup]
	)

 const {submit, Form} = useCustomForm({fields: loginFields, onSubmit: submitHandler})

 useEffect(() => {
		if (authenticated && authenticating) {
			openNotification(ENotificationType.Success, 'Sign Up successfully', 'top')

			setTimeout(() => {
				router.replace('/account/profile')
			}, 300)

			setAuthenticating(false)
		}
	}, [authenticated, authenticating, openNotification, router])

	return {
		error,
		loading,
  submit,
  Form,
  NotificationContextHolder
	}
}

export default useLogic
