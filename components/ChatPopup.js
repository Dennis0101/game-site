import { useState } from 'react'

export default function ChatPopup() {
  const [showChat, setShowChat] = useState(false)
  const [messages, setMessages] = useState([{ text: '무엇을 도와드릴까요?', sender: 'bot' }])
  const [input, setInput] = useState('')

  const toggleChat = () => setShowChat(!showChat)

  const sendMessage = () => {
    if (!input.trim()) return
    setMessages([...messages, { text: input, sender: 'user' }])
    setInput('')
    setTimeout(() => {
      setMessages(prev => [...prev, { text: '답변 준비 중입니다!', sender: 'bot' }])
    }, 1000)
  }

  return (
    <>
      <button className="chat-toggle" onClick={toggleChat}>💬</button>
      {showChat && (
        <div className="chat-popup">
          <div className="chat-messages">
            {messages.map((msg, i) => (
              <div key={i} className={`chat-bubble ${msg.sender}`}>{msg.text}</div>
            ))}
          </div>
          <div className="chat-input">
            <input
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && sendMessage()}
              placeholder="메시지를 입력하세요"
            />
            <button onClick={sendMessage}>전송</button>
          </div>
        </div>
      )}
    </>
  )
}
