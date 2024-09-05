import React from 'react'

const ModalContents = () => {
  return (
    <div>
    <h1 className="text-2xl font-bold mb-3">Create a new access key</h1>
    <p className="text-base pr-11 leading-snug">
      After generating the key, immediately copy it and insert it into your
      code. Be aware that for security purposes, the key will not be
      accessible again after this point, so make sure to store it securely
      during this initial access.
    </p>
</div>
  )
}

export default ModalContents