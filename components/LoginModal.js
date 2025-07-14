import { useState } from 'react'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../lib/firebase'

export default function LoginModal({ show, onClose }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  if (!show) return null

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password)
      alert('로그인 성공!')
      onClose()
    } catch (err) {
      alert('로그인 실패: ' + err.message)
    }
  }

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>로그인</h2>
        <input type="email" placeholder="이메일" value={email} onChange={e => setEmail(e.target.value)} />
        <input type="password" placeholder="비밀번호" value={password} onChange={e => setPassword(e.target.value)} />
        <button onClick={handleLogin}>확인</button>
        <button onClick={onClose}>닫기</button>
      </div>
    </div>
  )
}
