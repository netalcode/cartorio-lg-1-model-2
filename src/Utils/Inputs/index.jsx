import React, { useEffect, useRef } from 'react'
import styles from './styles.module.scss'
import { useField } from '@unform/core'

export default function Input({ type, name, label, maxLength, ...rest }) {
    !type && <span>unspecified parameters</span>

    const inputRef = useRef(null)
    const { fieldName, defaultValue, registerField, error } = useField(name)

    useEffect(() => {
        registerField({
            name: fieldName,
            ref: inputRef,

            getValue: ref => {
                return ref.current.value
            },
            setValue: (ref, value) => {
                ref.current.value = value
            },
            clearValue: ref => {
                ref.current.value = ''
            },
        })
    }, [fieldName, registerField])

    switch (type) {
        case "text": {
            return (
                <div className={styles.inputText}>
                    <label htmlFor="input">{label}</label>
                    <input ref={inputRef} type="text" id="input" maxLength={maxLength} {...rest} />
                    {error && <span style={{color: "#f00"}}>{error}</span>}
                    {maxLength && <span>{`Máx. ${maxLength} carácters`}</span>}
                </div>
            )
        }
        case "textArea": {
            return (
                <div className={styles.textArea}>
                    <label htmlFor="txtArea">{label}</label>
                    <textarea ref={inputRef} id="txtArea" rows="4" cols="60"  />
                    {error && <span style={{color: "#f00"}}>{error}</span>}
                    {maxLength && <span>{`Máx. ${maxLength} carácters`}</span>}
                </div>
            )
        }
    }
}