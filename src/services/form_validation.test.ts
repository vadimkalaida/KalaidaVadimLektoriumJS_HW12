import { validateUsername, validateEmail, validatePassword, register } from "./form_validation";

const users : Array<any> = [
  {
    username : 'johnMarston32',
    email : 'john_marston@gmail.com',
    password : 'johnMARSTON553#'
  }
  ];

describe('User', () => {

  describe('Username Validation', () => {
    describe('Username is valid', () => {
      it('Standard password', () => {expect(validateUsername('gfdgfdgdGHB4343')).toBe(true)})
      it('Password with dot', () => {expect(validateUsername('gfdgfd.GHB4343')).toBe(true)})
      it('Password with underline', () => {expect(validateUsername('gfdgfd_GHB4343')).toBe(true)})
      it('Password with dot and underline', () => {expect(validateUsername('gfdgfd.GHB_343')).toBe(true)})
    })
    describe('Username is invalid', () => {
      it('Empty', () => {expect(validateUsername('')).toBe(false)})
      it('Dot at the beginning', () => {expect(validateUsername('.gfgregtGF43')).toBe(false)})
      it('Underline at the beginning', () => {expect(validateUsername('_gfgregtGF43')).toBe(false)})
      it('Underline and dot at the beginning', () => {expect(validateUsername('_.gfgregtGF43')).toBe(false)})
      it('Dot and Undreline at the beginning', () => {expect(validateUsername('._gfgregtGF43')).toBe(false)})
      it('Dot after underline', () => {expect(validateUsername('ggfdfg_.regtGF43')).toBe(false)})
      it('Underline after dot', () => {expect(validateUsername('ggfdfg._regtGF43')).toBe(false)})
      it('Underline at the ending', () => {expect(validateUsername('ggfdfgregtGF43_')).toBe(false)})
      it('Dot at the ending', () => {expect(validateUsername('ggfdfgregtGF43.')).toBe(false)})
      it('Dot and Underline at the ending', () => {expect(validateUsername('ggfdfgregtGF43._')).toBe(false)})
      it('Underline and Dot at the ending', () => {expect(validateUsername('ggfdfgregtGF43_.')).toBe(false)})
      it('Password with special symbols(except . and _ )', () => {expect(validateUsername('g#gf-fg/%t_.GF!3')).toBe(false)})
    })
  })

  describe('Email Validation', () => {
    describe('Email is valid', () => {
      it('Standard email', () => {expect(validateEmail('john_marston@rdr2.mail')).toBe(true)})
      it('Numbers email', () => {expect(validateEmail('12345678@gmali.con')).toBe(true)})
    })
    describe('Email is invalid', () => {
      it('Empty', () => {expect(validateEmail('')).toBe(false)})
      it('Numbers', () => {expect(validateEmail('4546465')).toBe(false)})
      it('Letters', () => {expect(validateEmail('gdfgdfhdh')).toBe(false)})
      it('Without @', () => {expect(validateEmail('gfdsgsdffsd.com.ias')).toBe(false)})
      it('With spaces', () => {expect(validateEmail('db fgshn @ fgsdr . dsfd')).toBe(false)})
      it('Without dot', () => {expect(validateEmail('myemail2@ggfdgd')).toBe(false)})
    })
  })

  describe('Password Validation', () => {
    describe('Password is valid', () => {
      it('Standard password', () => {expect(validatePassword('Gggcvbh2345gdg6')).toBe(true)})
      it('Password with special symbols', () => {expect(validatePassword('Gg$#.gf788&4v!')).toBe(true)})
    })
    describe('Password is invalid', () => {
      it('Empty', () => {expect(validatePassword('')).toBe(false)})
      it('Without letters', () => {expect(validatePassword('4546544456')).toBe(false)})
      it('Without numbers', () => {expect(validatePassword('fdsfsfFfdsf')).toBe(false)})
      it('Without lowercase numbers', () => {expect(validatePassword('FFFGFDGDFG4135')).toBe(false)})
      it('Without uppercase numbers', () => {expect(validatePassword('hfghfffrre4135')).toBe(false)})
      it('Password length less than 8', () => {expect(validatePassword('Fgfv45')).toBe(false)})
      it('Password length more than 24', () => {expect(validatePassword('Fgfv45gdfgfdgdgdg45df4g6fd4g6f4dg46d6g46GGGfgfd6gdfg4')).toBe(false)})
    })
  })

  describe('Register', () => {
    describe('Successfully registered', () => {
      it('Standard', () => {expect(register(users, 'arthurMorgan123', 'morgan_a13@gmail.com', 'MoRgAnN19')).toBe(true)})
    })
    describe('Unsuccessfully', () => {
      it('Empty', () => {expect(register([], '', '', '')).toBe(false)})
      it('Empty Users Array', () => {expect(register([], 'testUser34', 'testen23@gmail.com', 'testPSSA23_f')).toBe(false)})
      it('Empty Username', () => {expect(register(users, '', 'testen23@gmail.com', 'testPSSA23_f')).toBe(false)})
      it('Empty Email', () => {expect(register(users, 'testUser34', '', 'testPSSA23_f')).toBe(false)})
      it('Empty Password', () => {expect(register(users, 'testUser34', 'testen23@gmail.com', '')).toBe(false)})
      it('Username already exist', () => {expect(register(users, 'johnMarston32', 'testen23@gmail.com', 'testPSSA23_f')).toBe(false)})
      it('Email already exist', () => {expect(register(users, 'testUser34', 'john_marston@gmail.com', 'testPSSA23_f')).toBe(false)})
      it('Password already exist', () => {expect(register(users, 'testUser34', 'testen23@gmail.com', 'johnMARSTON553#')).toBe(false)})
      it('Account already exist', () => {expect(register(users, 'johnMarston32', 'john_marston@gmail.com', 'johnMARSTON553#')).toBe(false)})
    })
  })
})