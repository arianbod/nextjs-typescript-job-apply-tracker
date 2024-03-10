import React from 'react';
import {
	dehydrate,
	HydrationBoundary,
	QueryClient,
} from '@tanstack/react-query';
import JobsList from '@/components/jobs/JobsList';
import SearchForm from '@/components/jobs/SearchForm';
import { getAllJobsAction } from '@/utils/actions';

const JobPage = async () => {
	const queryClient = new QueryClient();
	await queryClient.prefetchQuery({
		queryKey: ['jobs', '', 'all', 1],
		queryFn: () => getAllJobsAction({}),
	});
	return (
		<HydrationBoundary state={dehydrate(queryClient)}>
			<SearchForm />
			<JobsList />
		</HydrationBoundary>
	);
};

export default JobPage;
