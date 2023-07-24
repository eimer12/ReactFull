import { addPerson } from "@/shared/redux/features/personSlice";
import { useAppDispatch } from "@/shared/redux/store";
import { Button, TextField } from "@mui/material";
import { useRef } from "react";
import { Outlet } from "react-router-dom";

const Info: React.FC = () => {

	const name = useRef<string>("");
	const age = useRef<number>(0);
	const dispatch = useAppDispatch();

	function handleAddPeople() {
		dispatch(addPerson({ name: name.current, age: age.current }));
	};

	return (
		<div className="w-full">
			<div className="mx-auto w-[600px]">
				<div>Info</div>
				<TextField id="standard-basic" label="Name" variant="standard" onChange={(e) => (name.current = e.target.value)} />
				<TextField id="standard-basic" label="Age" type="numeric" variant="standard" onChange={(e) => (age.current = Number(e.target.value))} />

				<Button variant="contained" onClick={handleAddPeople}>Add Person</Button>
				<div className="border-4 mt-5">
					<Outlet />
				</div>
			</div>
		</div>
	)
}

export default Info;
