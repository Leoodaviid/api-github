import { LoginUserProps, UserProps } from '../../models/models'
import baseApi from './config/api'

export const getUser = async (user: LoginUserProps) => baseApi.get<UserProps>(`/users/${user}`)
