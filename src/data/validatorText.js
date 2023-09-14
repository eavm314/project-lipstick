const textValidator = (value)=>{

  const regEx = /^[^.,\-_]+$/

  return regEx.test(value)
}

export {textValidator}