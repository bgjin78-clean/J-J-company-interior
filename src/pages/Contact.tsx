import { useMemo, useState } from 'react'
import type { FormEvent } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Seo } from '../components/Seo'
import { faqs } from '../data/faq'
import { SITE, priorityRegions } from '../data/site'

const topics = ['욕실', '주방', '도배·장판', '조명', '철거', '폐기물', '상가 원상복구', '부분수리', '기타']

type Kind = 'customer' | 'partner'

export function ContactPage() {
  const [params] = useSearchParams()
  const initialKind: Kind = params.get('type') === 'partner' ? 'partner' : 'customer'
  const initialArea = priorityRegions.find((region) => region === params.get('area')) ?? '창원'
  const [kind, setKind] = useState<Kind>(initialKind)
  const [sent, setSent] = useState('')

  const headline = useMemo(
    () => (kind === 'partner' ? '협력업체 신청' : '시공 상담'),
    [kind],
  )

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const name = String(data.get('name') ?? '').trim()
    const phone = String(data.get('phone') ?? '').trim()
    const area = String(data.get('area') ?? '').trim()
    const topic = String(data.get('topic') ?? '').trim()
    const message = String(data.get('message') ?? '').trim()
    const body = [
      `[J&J adcompany] ${headline}`,
      `이름: ${name}`,
      `연락처: ${phone}`,
      `지역: ${area}`,
      `분야: ${topic || '-'}`,
      '',
      message,
    ].join('\n')

    if (SITE.email) {
      window.location.href = `mailto:${SITE.email}?subject=${encodeURIComponent(`[J&J adcompany] ${headline} - ${name}`)}&body=${encodeURIComponent(body)}`
      setSent('메일 앱으로 문의 내용을 넘겼습니다. 전송 버튼을 눌러 주세요.')
      return
    }

    const key = 'jj-adcompany-inquiries'
    const prev = JSON.parse(localStorage.getItem(key) || '[]') as string[]
    localStorage.setItem(key, JSON.stringify([body, ...prev].slice(0, 30)))
    setSent('문의 내용을 이 브라우저에 보관했습니다. 수신 메일이 연결되기 전에는 담당자 화면으로 전달되지 않습니다.')
    event.currentTarget.reset()
  }

  return (
    <>
      <Seo
        title="문의"
        description="창원·마산·진해·밀양·김해·함안 철거·인테리어 상담과 협력업체 신청."
      />
      <section className="page-hero">
        <div className="wrap">
          <p className="kicker">문의</p>
          <h1>상담과 협력 신청</h1>
          <p className="lede">
            시공이 필요한 주소와, 제휴를 원하는 업체를 같은 양식으로 받습니다. 우선
            지역은 창원, 마산, 진해, 밀양, 김해, 함안입니다.
            {SITE.phoneDisplay
              ? ` 전화 ${SITE.phoneDisplay}.`
              : ' 대표 전화는 제휴 소개가 확정되면 이 자리에 표시합니다.'}
          </p>
        </div>
      </section>
      <section className="band">
        <div className="wrap contact-grid">
          <form className="form" onSubmit={onSubmit}>
            <div className="kind-switch">
              <button type="button" className={kind === 'customer' ? 'is-on' : ''} onClick={() => setKind('customer')}>
                시공 상담
              </button>
              <button type="button" className={kind === 'partner' ? 'is-on' : ''} onClick={() => setKind('partner')}>
                협력업체 신청
              </button>
            </div>
            <label>
              {kind === 'partner' ? '업체명' : '이름'}
              <input name="name" required maxLength={40} />
            </label>
            <label>
              연락처
              <input name="phone" required inputMode="tel" maxLength={20} />
            </label>
            <div className="form-row">
              <label>
                지역
                <select name="area" defaultValue={initialArea}>
                  {priorityRegions.map((region) => (
                    <option key={region}>{region}</option>
                  ))}
                  <option>기타 지역</option>
                </select>
              </label>
              <label>
                {kind === 'partner' ? '주요 공종' : '관심 분야'}
                <select name="topic" defaultValue={kind === 'partner' ? '철거' : '욕실'}>
                  {topics.map((topic) => (
                    <option key={topic}>{topic}</option>
                  ))}
                </select>
              </label>
            </div>
            <label>
              내용
              <textarea
                name="message"
                required
                rows={6}
                placeholder={
                  kind === 'partner'
                    ? '활동 지역, 철거·인테리어 비중, 최근 현장 유형을 적어 주세요.'
                    : '주소의 동 이름, 평수, 철거가 필요한지, 희망 시기를 적어 주세요.'
                }
              />
            </label>
            <button className="btn btn-solid" type="submit">
              {headline} 보내기
            </button>
            {sent ? <p className="form-note">{sent}</p> : null}
          </form>
          <div className="faq-list">
            {faqs.map((item) => (
              <details key={item.id}>
                <summary>
                  <small>{item.category}</small>
                  {item.question}
                </summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
