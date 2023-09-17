const textValidator = (value)=>{

  const regEx = /^[^.,\-_]+$/

  return regEx.test(value)
}

const tarjetaValidator = (value) =>{
  const regEx = /^[0-9]{13,16}$/
  return regEx.test(value)
}

const ccvValidator = (value) =>{
  const regEx = /^[0-9]{4,6}$/
  return regEx.test(value)
}

export {textValidator, tarjetaValidator, ccvValidator}