import { LoginUserProps, UserProps } from '../../models/models'
import baseApi from './config/api'

export const getUser = async (userLogin: LoginUserProps) =>
  baseApi.get<UserProps>(`users/${userLogin.userLogin}`)

export const getRepos = async (userLogin: LoginUserProps) =>
  baseApi.get(`users/${userLogin.userLogin}/repos`)
