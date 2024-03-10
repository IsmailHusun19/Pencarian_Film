import Dexie from 'dexie';

class MyDatabase extends Dexie {
    constructor() {
      super('MyDatabase');
      this.version(3).stores({
        myTable: 'id, title, poster, star, description',
      });
    }
  }



export const Liked = (movie) => {
    const db = new MyDatabase();
    db.myTable.add({ 
      id : movie.id,
      title : movie.title,
      poster_path : movie.poster_path,
      vote_average : movie.vote_average,
      overview : movie.overview
    }).then(() => {
        return
    }).catch((error) => {
        return error.message
    });
}

export const DeleteLiked = async (id) => {
  const db = new MyDatabase();
  try {
    await db.open();
    await db.myTable.delete(id);
  } catch (error) {
    console.error('Error while deleting data:', error);
  } finally {
    db.close();
  }
}

export const getAllDataFromTable = async (db = new MyDatabase()) => {
    try {
        await db.open();
        const allData = await db.myTable.toArray();
        return allData;
    }
    catch (error) {
        console.error(error);
    } 
    finally {
        db.close();
    }
}