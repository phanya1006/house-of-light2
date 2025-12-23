
export enum Role {
  USER = 'user',
  AI = 'model'
}

export interface Message {
  id: string;
  role: Role;
  text: string;
  timestamp: Date;
}

export interface Worker {
  name: string;
  role: string;
}

export interface ChurchInfo {
  name: string;
  location: string;
  city: string;
  country: string;
  mission: string;
  aspiration: string;
  schedule: {
    [key: string]: {
      id: string;
      name: string;
      time: string;
      image: string;
      description: string;
    };
  };
  leadership: {
    berger: string;
    wife: string;
    son: string;
  };
  workers: Worker[];
  creator: string;
}
