'use server';

import prisma from './db';
import { auth } from '@clerk/nextjs';
import { JobType, CreateAndEditJobType, createAndEditJobSchema } from './types';
import { redirect } from 'next/navigation';
import { Prisma } from '@prisma/client';
import dayjs from 'dayjs';

const authenticateAndRedirect = (): string => {
	const { userId } = auth();
	if (!userId) {
		return redirect('/');
	}
	return userId;
};
export const createJobAction = async (
	values: CreateAndEditJobType
): Promise<JobType | null> => {
	try {
		createAndEditJobSchema.parse(values);
		const job: JobType = await prisma.job.create({
			data: {
				...values,
				clerkId: authenticateAndRedirect(),
			},
		});
		return job;
	} catch (error) {
		console.log(error);
		return null;
	}
};
