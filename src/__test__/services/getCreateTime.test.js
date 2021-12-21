import getCreatedTime from '../../service/getCreateTime'

describe('Tests for getCreateTime service', () => {

  test('Should return a "A few minutes ago"', () => {
    const created_at = new Date().toString()
    const result = getCreatedTime({ created_at })
    expect(result).toBe('A few minutes ago')
  })

  test('Should return a "Some time ago" when the Date is not correct', () => {
    const created_at = 'Hello!'
    const result = getCreatedTime({ created_at })
    expect(result).toBe('Some time ago')
  })

})