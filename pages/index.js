import { useState } from 'react'
import ProductCard from '../components/ProductCard'
import LoginModal from '../components/LoginModal'
import ChatPopup from '../components/ChatPopup'

export default function Home() {
  const [showLogin, setShowLogin] = useState(false)
  const openLogin = () => setShowLogin(true)
  const closeLogin = () => setShowLogin(false)

  return (
    <>
      <header className="top-bar">
        <span>5:53</span>
        <span className="site">cheatbay.org</span>
        <span className="signal">LTE 🔋</span>
      </header>
      <main>
        <ProductCard
          type="JUST"
          gradient="just"
          description="저스트\n월핵 단품으로 각종 esp 기능으로 구성된 EAC 완벽 우회 서든어택 핵 제품입니다"
          prices={["1일 | 13,000원", "7일 | 75,000원", "30일 | 200,000원"]}
          onLoginClick={openLogin}
        />
        <ProductCard
          type="DAY"
          gradient="day"
          description="데이\n인피니티 + 랭커용 기능으로 구성된 보안좋은 안티치트 우회 서든핵 제품입니다"
          prices={["1일 | 15,000원", "7일 | 90,000원", "30일 | 250,000원"]}
          onLoginClick={openLogin}
        />
      </main>
      <LoginModal show={showLogin} onClose={closeLogin} />
      <ChatPopup />
    </>
  )
}
