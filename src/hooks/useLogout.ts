import { useState } from 'react'
import { useAuthContext } from './useAuthContext'
import userApi from '../http/userApi'

export const useLogout = () => {
    const [isLoading3, setIsLoading3] = useState(false)
    const { dispatch: dispatch3 } = useAuthContext()

    const logout = async () => {
        try {
            setIsLoading3(true)
            const response = await userApi.post('/logout')
            console.log(response)
            setIsLoading3(false)
            localStorage.removeItem('token')
            dispatch3({ type: 'LOGOUT' })
        } catch (error) {
            console.log(error.response)
        }
    }

    return { isLoading3, logout }
}
