import profiles from '../data/profiles.json';

export const findAll = () => {
  return new Promise((resolve, reject) => {
    if (profiles === null || profiles.length === 0) {
      reject('there is no data');
    }

    resolve(profiles);
  });
};
