import type { AuthError } from '@supabase/supabase-js'

export const useFormErros = () => {
  const serverError = ref('')

  const handleServerError = (error: AuthError) => {
    serverError.value =
      error.message === 'Invalid login credentials' ? 'Incorrect email or password' : error.message
  }

  return {
    serverError,
    handleServerError,
  }
}
