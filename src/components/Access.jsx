import React from 'react'
import Identification from './Identification'
import Menu from './Menu'

const Access = ({ user,
     setUser,
      rut, 
      setRut,
      terms,
      setTerms,
      fieldValidation,
      setFieldValidation,
      setArnesCondition,
      setAccessoriesCondition,
      setLifeRopeCondition,
      setAnchorPointCondition
    }) => {
    return (
        <>
           {fieldValidation === false ?
           <Identification
           user={user}
           setUser={setUser}
           rut={rut}
           setRut={setRut}
           terms={terms}
           setTerms={setTerms}
           setFieldValidation={setFieldValidation}
           />
           :  
           <Menu
           setArnesCondition={setArnesCondition}
           setAccessoriesCondition={setAccessoriesCondition}
           setLifeRopeCondition={setLifeRopeCondition}
           setAnchorPointCondition={setAnchorPointCondition}
          />
          }
        </>
    )
}

export default Access
