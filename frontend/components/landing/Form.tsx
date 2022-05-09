import {useState} from 'react'
import { useRouter } from 'next/router'
import { useRecoilState } from 'recoil'
import { userInfoState, accessTokenState, refreshTokenState } from '../../states/states'
import axios from 'axios'
import InputTextField from '../common/InputTextField'
import ButtonSubmitting from '../common/button/ButtonSubmitting'
import ButtonRedirecting from '../common/button/ButtonRedirecting'
import styled from 'styled-components'

const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export default function Form() {
  const [bojId, setBojId] = useState('')
  const [userInfo, setUserInfo] = useRecoilState(userInfoState)
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState)
  const [refreshToken, setRefreshToken] = useRecoilState(refreshTokenState)
  const handleChange = (event: any) => {
    setBojId(event.target.value)
  }
  const router = useRouter()
  const handleClick = () => {
    axios({
      url: 'https://k6a408.p.ssafy.io/api/v1/members',
      method: 'post',
      headers: {
        'bojId': bojId
      }
    })
      .then(res => {
        // console.log(res.data.data)
        setUserInfo(res.data.data.member)
        setAccessToken(res.data.data.token.accessToken)
        setRefreshToken(res.data.data.token.refreshToken)
        router.push('/recommendation')
      })
  }

  return (
    <Container>
      <div style={{marginBottom: 40}}>
        <InputTextField
          textFieldAttr={{width: '20vw', id: 'bojId', label: 'BOJ ID', password: false, autofocus: true}}
          onChange={handleChange}
        />
      </div>

      <div>
        <ButtonSubmitting submittingAttr={{text: '로그인', width: '20vw'}} onClick={handleClick} />
        <ButtonRedirecting />
      </div>
    </Container>
  )
}
