import { fetchUsers, authList } from ".";
import axios from 'axios';

jest.mock('axios');
 
describe('fetchUsers', () => {

  it('fetches users data by query', async () => {
    const data = {
        data: {
          users: [1,2,3],
        },
      };
    axios.get.mockImplementationOnce(() => Promise.resolve(data));
    await expect(fetchUsers('c')).resolves.toEqual([1,2,3]);
  });

  it('fetches a list of authenticated holidays', async () => {
    const data = {
        data: {
          holidays: [{id:1},{id:2},{id:3}],
        },
      };
    axios.get.mockImplementationOnce(() => Promise.resolve(data));
    await expect(authList(1)).resolves.toEqual([1,2,3]);
  });
 
});
