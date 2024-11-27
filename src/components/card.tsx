interface cardProps{
    name: string,
    size: string,
    location: string,
    amount: number,
    short: string,
    description: string
    imageURL: string[]
}

const Card = ({name, size, location,short, amount, description}: cardProps) => {
    
  return (
    <div className="w-[300px] h-[300px] border-[none] rounded-[20px] px-[15px] py-[10px] bg-[#cbc4c4]">
      <div className="flex justify-start align-middle flex-wrap gap-x-[15px]">
        <div>Name: {name}</div>
        <div>Size: {size}</div>
        <div>Location: {location}</div>
        <div>Amount: {amount}</div>
        <div>Short: {short}</div>
        <div>Description: {description}</div>
        <div></div>
      </div>
    </div>
  )
}

export default Card
