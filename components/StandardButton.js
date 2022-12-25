function StandardButton({ buttontext, url }) {
    return (
      <div>
          <a href={url}>
            <button className="bg-blue-500 bg-darkgreen hover:bg-hover text-white border border-darkdarkblue font-bold py-2 px-4 rounded inline-flex items-center ">
                {buttontext}
            </button>
          </a>
      </div>
    )
  }
  
  export default StandardButton