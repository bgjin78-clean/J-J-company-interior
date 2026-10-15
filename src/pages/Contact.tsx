import { useMemo, useState } from 'react'
import type { FormEvent } from 'react'
import { Navigate, useSearchParams } from 'react-router-dom'
import emailjs from '@emailjs/browser'
import { Seo } from '../components/Seo'
import { faqs } from '../data/faq'
import { CONTACT_DESCRIPTION, CONTACT_TITLE } from '../data/seo'
import { SITE, phoneHref } from '../data/site'

const EMAILJS_PUBLIC_KEY = 'JKsVOKPtnWHIr2BCV'
const EMAILJS_SERVICE_ID = 'allbarunclean'
const EMAILJS_TEMPLATE_ID = 'template_b4ox5js'

const topics = [
  '인테리어철거',
  '원상복구철거',
  '상가철거',
  '식당철거',
  '욕실주방철거',
  '화장실',
  '주방',
  '싱크대',
  '타일',
  '조명',
  '도배장판',
  '몰딩',
  '우물천정',
  '부분수리',
  '기타',
]

type Kind = 'customer' | 'partner'

export function LegacyContactRedirect() {
  const [params] = useSearchParams()
  const search = params.toString()
  return <Navigate to={search ? `/sangdam?${search}` : '/sangdam'} replace />
}

export function ContactPage() {
  const [params] = useSearchParams()
  const initialKind: Kind = params.get('type') === 'partner' ? 'partner' : 'customer'
  const [kind, setKind] = useState<Kind>(initialKind)
  const [sent, setSent] = useState('')
  const [sending, setSending] = useState(false)

  const headline = useMemo(
    () => (kind === 'partner' ? '업체상담' : '시공상담'),
    [kind],
  )

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    const data = new FormData(form)
    const name = String(data.get('name') ?? '').trim()
    const phone = String(data.get('phone') ?? '').trim()
    const area = String(data.get('area') ?? '').trim()
    const topic = String(data.get('topic') ?? '').trim()
    const message = String(data.get('message') ?? '').trim()
    const body = [
      `[JJ애드컴퍼니] ${headline}`,
      `이름: ${name}`,
      `연락처: ${phone}`,
      `지역: ${area}`,
      `분야: ${topic || '-'}`,
      '',
      message,
      '',
      `회신 전화: ${SITE.phoneDisplay}`,
    ].join('\n')

    setSending(true)
    setSent('')
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: name,
          name,
          phone,
          region: area,
          service: `${headline} / ${topic || '-'}`,
          message: body,
        },
        { publicKey: EMAILJS_PUBLIC_KEY },
      )
      form.reset()
      setSent('범위를 받아 두었습니다. 확인되면 전화드리겠습니다.')
    } catch {
      setSent(`보내지 못했습니다. ${SITE.phoneDisplay}로 말씀해 주세요.`)
    } finally {
      setSending(false)
    }
  }

  return (
    <>
      <Seo title={CONTACT_TITLE} description={CONTACT_DESCRIPTION} />
      <section className="page-hero">
        <div className="wrap">
          <p className="kicker">문의·FAQ</p>
          <h1>문의·FAQ</h1>
          <p className="lede lede-wide">
            창원, 마산, 진해, 김해, 밀양, 함안의 철거·인테리어 상담입니다. 시공 범위와 공사
            기간, 견적 방식을 안내하고, 철거가 필요하면 폐기물 처리까지 같은 상담에서
            나눕니다. 시공상담과 업체상담은 양식을 나눠 받습니다.
          </p>
        </div>
      </section>
      <section className="band">
        <div className="wrap contact-layout">
          <aside className="contact-aside">
            <h2>상담 안내</h2>
            <a className="contact-phone" href={phoneHref}>
              {SITE.phoneDisplay}
            </a>
            <p>상담 가능 시간 {SITE.hours}</p>
            <p>현장 방문은 일정 협의 후 진행합니다.</p>
            <ul>
              <li>시공지역: 창원 · 마산 · 진해 · 김해 · 밀양 · 함안</li>
              <li>시공상담: 철거 · 인테리어 · 부분수리</li>
              <li>업체상담: 직접 시공하는 팀</li>
            </ul>
          </aside>
          <form className="form" onSubmit={onSubmit}>
            <h2>상담 요청</h2>
            <div className="kind-switch">
              <button type="button" className={kind === 'customer' ? 'is-on' : ''} onClick={() => setKind('customer')}>
                시공상담
              </button>
              <button type="button" className={kind === 'partner' ? 'is-on' : ''} onClick={() => setKind('partner')}>
                업체상담
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
            <div className="form-row form-row-two">
              <label>
                지역
                <input
                  name="area"
                  required
                  maxLength={40}
                  placeholder="읍·면·동까지"
                  defaultValue={params.get('area') ?? ''}
                />
              </label>
              <label>
                {kind === 'partner' ? '주요 공종' : '관심 분야'}
                <select name="topic" defaultValue={kind === 'partner' ? '인테리어철거' : '화장실'}>
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
                    ? '직접 하는 철거·인테리어, 출동하는 시·군, 사진 사용 여부를 적어 주세요.'
                    : '동 이름, 철거가 필요한지, 화장실·싱크대·우물천정 중 손볼 곳, 이사 날짜를 적어 주세요.'
                }
              />
            </label>
            <button className="btn btn-solid" type="submit" disabled={sending}>
              {sending ? '전송 중' : `${headline} 보내기`}
            </button>
            {sent ? <p className="form-note">{sent}</p> : null}
          </form>
        </div>
        <div className="wrap faq-block">
          <div className="section-title">
            <h2>자주 묻는 내용</h2>
            <p className="sub">견적, 아파트 작업, 폐기물, 공사 범위, 협력 상담을 모아 두었습니다.</p>
          </div>
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
