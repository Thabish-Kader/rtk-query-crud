import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const athletesApi = createApi({
	reducerPath: "athleteApi",
	baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8000" }),
	tagTypes: ["athletes"],
	endpoints: (builder) => ({
		getAthletes: builder.query<Athlete[], void>({
			query: (name) => `/athletes`,
			providesTags: ["athletes"],
		}),
		getSingleAthletes: builder.query<Athlete, number>({
			query: (id) => `/athletes/${id}`,
		}),
		addAthlete: builder.mutation<Athlete[], Athlete>({
			query: (athlete) => ({
				url: "/athletes",
				method: "POST",
				body: athlete,
			}),
			invalidatesTags: ["athletes"],
		}),
		deleteAthlete: builder.mutation<Athlete[], number>({
			query: (id) => ({
				url: `/athletes/${id}`,
				method: "DELETE",
				body: id,
			}),
			invalidatesTags: ["athletes"],
		}),
		updateAthlete: builder.mutation<Athlete[], Athlete>({
			query: (athlete) => ({
				url: `/athletes/${athlete.id}`,
				method: "PUT",
				body: athlete,
			}),
			invalidatesTags: ["athletes"],
		}),
	}),
});

export const {
	useGetAthletesQuery,
	useGetSingleAthletesQuery,
	useAddAthleteMutation,
	useDeleteAthleteMutation,
	useUpdateAthleteMutation,
} = athletesApi;
