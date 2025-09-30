import {useState} from 'react'
import {GoChevronDown} from 'react-icons/go'
import {GoChevronRight} from 'react-icons/go'

const Accordion = (props) => {
  const {items} = props
  const [expandedIndex, setExpandedIndex] = useState(-1)

  const handleClick = (nextIndex) => {
    setExpandedIndex((currentExpandedIndex) => {
      if (currentExpandedIndex === nextIndex) {
        return -1
      } else {
        return nextIndex
      }
    })
  }

  const renderedItems = items.map((item, index) => {
    const isExpanded = index === expandedIndex
    
 
    const icon = (
      <span className="text-xl text-blue-600 transition-transform">
        {isExpanded ? <GoChevronDown /> : <GoChevronRight />}
      </span>
    )


    return (
      <div key={item.id} className="border border-gray-200 rounded-lg mb-2 overflow-hidden shadow-sm">
        <div
          onClick={() => handleClick(index)}
          className="flex justify-between items-center p-4 bg-blue-100"
        >
          <span className="font-extrabold text-gray-800">{item.label}</span>
          {icon}
        </div>
        {/* conditional content div based on if index of item === expanded index from state */}
        {isExpanded && (
          <div className="border-t border-gray-200 p-4 bg-white">
            <div className="text-gray-600 leading-relaxed">
              {item.content}
            </div>
          </div>
        )}
      </div>
    )
  })

  return <div className="max-w-2xl mx-auto">{renderedItems}</div>
}

export default Accordion