

const Card = ({props}: {props: {name: string, size: string, amount: number, short: string, description: string, imageUrl: []}}) => {
    const {name, size, amount, short, description} = props
  return (
    <div className="w-[300px] h-[300px] border-[none] rounded-[20px] px-[15px] py-[10px] bg-[#cbc4c4]">
      <div className="flex justify-start align-middle flex-wrap gap-x-[15px]">
        <div>Name: {name}</div>
        <div>Size: {size}</div>
        <div>Amount: {amount}</div>
        <div>Short: {short}</div>
        <div>Description: {description}</div>
      </div>
    </div>
  )
}

export default Card
