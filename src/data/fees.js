// ─────────────────────────────────────────────────────────────
//  MINDNEST — CLASS-WISE FEES
//  No prices have been entered yet. To publish a fee, fill in the
//  fields for that class below. Anything left as '' is not shown.
//
//  monthlyFee         → number or text, e.g. 2500  (shown as ₹2,500 / month)
//  admissionFee       → e.g. 500   (leave '' if not applicable)
//  subjects           → e.g. 'Maths, Science, English'
//  classesPerWeek     → e.g. 5
//  classDuration      → e.g. '1 hour 30 minutes'
//  additionalCharges  → e.g. 'Worksheets: ₹200 per term'
//
//  A class shows "Fee details coming soon" until monthlyFee is filled in.
// ─────────────────────────────────────────────────────────────

export const currencySymbol = '₹'

const blank = (cls, stage) => ({
  class: cls,
  stage,
  monthlyFee: '',
  admissionFee: '',
  subjects: '',
  classesPerWeek: '',
  classDuration: '',
  additionalCharges: '',
})

export const fees = [
  blank(1, 'Foundation'),
  blank(2, 'Foundation'),
  blank(3, 'Foundation'),
  blank(4, 'Foundation'),
  blank(5, 'Foundation'),
  blank(6, 'Concept Development'),
  blank(7, 'Concept Development'),
  blank(8, 'Concept Development'),
  blank(9, 'Academic & Exam Preparation'),
  blank(10, 'Academic & Exam Preparation'),
]

export const feeComingSoon = 'Fee details coming soon — contact us for the latest fee structure.'

export const hasFee = (f) => f.monthlyFee !== '' && f.monthlyFee !== null && f.monthlyFee !== undefined

export function formatMoney(v) {
  if (typeof v === 'number') return `${currencySymbol}${v.toLocaleString('en-IN')}`
  return String(v)
}
