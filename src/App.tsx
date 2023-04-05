import "./App.css";
import {
	useAddAthleteMutation,
	useDeleteAthleteMutation,
	useGetAthletesQuery,
	useGetSingleAthletesQuery,
	useUpdateAthleteMutation,
} from "./redux/api";

function App() {
	const { data } = useGetAthletesQuery();
	const { data: singleAthle } = useGetSingleAthletesQuery(1);
	const [addAthlete] = useAddAthleteMutation();
	const [deleteAthlete] = useDeleteAthleteMutation();
	const [updateAthlete] = useUpdateAthleteMutation();

	const handleAddAthlete = async () => {
		await addAthlete({ id: 5, name: "Ross", sport: "Wrestling" });
	};

	const handleDeleteAthlete = async (id: number) => {
		await deleteAthlete(id);
	};

	const handleUpdateAthlete = (id: number) => {
		updateAthlete({ id, name: "Tson Fury", sport: "Boxing" });
	};

	return (
		<div className="App">
			<h1>All Athletes</h1>
			{data?.map((athlete) => (
				<div>
					<div
						style={{
							display: "flex",
							flexDirection: "column",
						}}
					>
						<p>{athlete.name}</p> <p>Sport : {athlete.sport}</p>
						<button onClick={() => handleDeleteAthlete(athlete.id)}>
							X
						</button>
						<button onClick={() => handleUpdateAthlete(athlete.id)}>
							Update
						</button>
					</div>
				</div>
			))}
			<button onClick={handleAddAthlete}>Add Athlete</button>
			<h1>Single Athlete</h1>
			<p>{singleAthle?.name}</p>
			<p>Sport : {singleAthle?.sport}</p>
		</div>
	);
}

export default App;
