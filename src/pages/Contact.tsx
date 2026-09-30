import { useMemo, useState } from 'react'
import type { FormEvent } from 'react'
import { useSearchParams } from 'react-router-dom'
import emailjs from '@emailjs/browser'
import { Seo } from '../components/Seo'
import { faqs } from '../data/faq'
import { SITE, phoneHref } from '../data/site'

const EMAILJS_PUBLIC_KEY = 'JKsVOKPtnWHIr2BCV'
const EMAILJS_SERVICE_ID = 'allbarunclean'
const EMAILJS_TEMPLATE_ID = 'template_b4ox5js'

const topics = ['욕실', '주방', '도배·장판', '조명', '철거', '폐기물', '상가 원상복구', '부분수리', '기타']

type Kind = 'customer' | 'partner'

export function ContactPage() {
  const [params] = useSearchParams()
  const initialKind: Kind = params.get('type') === 'partner' ? 'partner' : 'customer'
  const [kind, setKind] = useState<Kind>(initialKind)
  const [sent, setSent] = useState('')
  const [sending, setSending] = useState(false)

  const headline = useMemo(
    () => (kind === 'partner' ? '협력업체 신청' : '시공 상담'),
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
      `[철거, 인테리어] ${headline}`,
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
      setSent('상담이 접수되었습니다. 확인 후 연락드리겠습니다.')
    } catch {
      setSent(`전송에 실패했습니다. ${SITE.phoneDisplay}로 전화해 주세요.`)
    } finally {
      setSending(false)
    }
  }

  return (
    <>
      <Seo
        title="문의"
        description="철거·인테리어 상담과 그 외 지역 협력업체 신청."
      />
      <section className="page-hero">
        <div className="wrap">
          <p className="kicker">문의</p>
          <h1>상담과 협력 신청</h1>
          <p className="lede">
            시공 상담과 그 외 지역 협력업체 신청을 받습니다. 전화는{' '}
            <a href={phoneHref}>{SITE.phoneDisplay}</a> 입니다.
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
                <input name="area" required maxLength={40} placeholder="활동 지역" />
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
            <button className="btn btn-solid" type="submit" disabled={sending}>
              {sending ? '전송 중' : `${headline} 보내기`}
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
