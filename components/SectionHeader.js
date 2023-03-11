function SectionHeader({ title, subtitle}) {
  return (
    <div>
        <div className='text-3xl text-center font-sans text-darkdarkblue '> 
            <h2>{title}</h2> 
            <h3 className="text-base">{subtitle}</h3>
        </div>
    </div>
  )
}
export default SectionHeader