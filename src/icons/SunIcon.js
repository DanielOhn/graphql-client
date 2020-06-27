import React from "react"

const SunIcon = (props) => {
  return (
    <button className="icon" onClick={props.onClick}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <g data-name="Layer 2">
          <g data-name="bulb">
            <rect
              width="24"
              height="24"
              transform="rotate(180 12 12)"
              opacity="0"
            />
            <path d="M12 7a5 5 0 0 0-3 9v4a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-4a5 5 0 0 0-3-9zm1.5 7.59a1 1 0 0 0-.5.87V20h-2v-4.54a1 1 0 0 0-.5-.87A3 3 0 0 1 9 12a3 3 0 0 1 6 0 3 3 0 0 1-1.5 2.59z" />
            <path d="M12 6a1 1 0 0 0 1-1V3a1 1 0 0 0-2 0v2a1 1 0 0 0 1 1z" />
            <path d="M21 11h-2a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2z" />
            <path d="M5 11H3a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2z" />
            <path d="M7.66 6.42L6.22 5a1 1 0 0 0-1.39 1.47l1.44 1.39a1 1 0 0 0 .73.28 1 1 0 0 0 .72-.31 1 1 0 0 0-.06-1.41z" />
            <path d="M19.19 5.05a1 1 0 0 0-1.41 0l-1.44 1.37a1 1 0 0 0 0 1.41 1 1 0 0 0 .72.31 1 1 0 0 0 .69-.28l1.44-1.39a1 1 0 0 0 0-1.42z" />
          </g>
        </g>
      </svg>
    </button>
  )
}

export default SunIcon
