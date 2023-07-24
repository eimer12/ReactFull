
export interface listUser {
	name: string
	id: number
}
export interface Props {
	text?: string
	count?: number
	users?: listUser[]
}

const Data: React.FC<Props> = (data: Props) => {
	return (
		<>
			{ data.text && <h3>{ data.text }</h3> }
		</>
	)
};

export default Data;