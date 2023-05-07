import prisma from '../db';

const findAll = async () => {
  const profiles = await prisma.user.findMany({
    select: {
      email: true,
      employed: true,
      firstName: true,
      githubAccount: true,
      id: true,
      lastName: true,
      skills: true,
    },
  });

  return profiles;
};

export { findAll };
