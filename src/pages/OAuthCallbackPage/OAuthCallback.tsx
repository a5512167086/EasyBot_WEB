import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { CustomLoader } from '@/components/CustomLoader'
import { useTranslation } from 'react-i18next'
// import axios from 'axios'

const loaderText = 'common.loading'

export const OAuthCallback = () => {
  const { t } = useTranslation()
  const navigate = useNavigate()

  useEffect(() => {
    // 獲取 URL 中的授權碼
    const urlParams = new URLSearchParams(window.location.search)
    const code = urlParams.get('code')
    console.log(code)
    // if (code) {
    //   // 將授權碼發送到後端以交換訪問令牌
    //   axios
    //     .get(`http://localhost:8000/auth/callback?code=${code}`)
    //     .then((response) => {
    //       console.log('Access Token:', response.data.access_token)
    //       console.log('ID Token:', response.data.id_token)
    //       // 成功後可以進行導向或儲存 token
    //       navigate('/dashboard') // 登錄成功後導向頁面
    //     })
    //     .catch((error) => {
    //       console.error('Error exchanging code for token:', error)
    //     })
    // }
  }, [navigate])

  return <CustomLoader size="6rem" text={t(loaderText)} />
}
