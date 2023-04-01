import { useState } from "react"
import { BoxContent } from "./styled"

const hourDefault = {
  in: '',
  out: ''
}

const dayDefault = {
  day: new Date(),
  hours: [
    hourDefault,
    hourDefault
  ]
}

const Content = ({ children }) => {
  const [days, setDays] = useState([
    dayDefault,
  ])


  const handleNewDay = () => {
    const newDays = [
      ...days,
      dayDefault
    ]

    setDays(newDays)
  }

  const handleNewHour = (index) => {
    const newDays = days.map((itemDay, indexDay) => {
      if (indexDay === index) {
        return {
          ...itemDay,
          hours: [
            ...itemDay.hours,
            hourDefault
          ]
        }
      }

      return itemDay
    })

    setDays(newDays)
  }

  return (
    <BoxContent>
      {
        days.map((item, index) => (
          <div key={index + item.day} style={{ display: 'flex', gap: '10' }}>
            Dia
            { ' ' }
            {
              item.hours.map((itemHour, hourIndex) => (
                <div>
                  Entrada { hourIndex }
                  Saída { hourIndex }
                  { ' ' }
                </div>
              ))
            } 
            { ' ' }
            <span onClick={() => handleNewHour(index)}>+ hora</span>
          </div>
        ))
      }
      <div onClick={handleNewDay}>
        + adicionar data
      </div>

      { children }
    </BoxContent>
  )
}

export default Content