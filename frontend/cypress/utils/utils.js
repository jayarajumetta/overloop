class Utils {

    generateRandomString(length, current) 
    {
      current = current || ''
      return length ? this.generateRandomString(--length, '0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz'.charAt(Math.floor(Math.random() * 60)) + current) : current
    }
  
    generateRandomNumber (length, current) 
    {
      current = current || 9
      return length ? this.generateRandomNumber(--length, '0123456789'.charAt(Math.floor(Math.random() * 10)) + current) : current
    } 
  }
  module.exports = new Utils()
  