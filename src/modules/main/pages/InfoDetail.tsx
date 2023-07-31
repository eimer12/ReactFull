import { useAppSelector } from "@/shared/redux/store";
import { useParams } from "react-router-dom";

const InfoDetail: React.FC = () => {
	const { id } = useParams();
	const persons = useAppSelector(state => state.person.persons);

	return (
		<>
			<div>{ id }</div>
			<div className="mt-3">
				{ persons.map((item, key) => (
					<div className="flex mt-1 gap-x-2" key={key}>
						<p>{ item.name }</p>
						<p>{ item.age }</p>
					</div>
				))}
			</div>
		</>
	)
}

export default InfoDetail;
