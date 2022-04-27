import 'reflect-metadata';
import firebase from "firebase/compat";
import FirebaseError = firebase.FirebaseError;


export function UserDetails(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
  console.log('UserDetails initialized')
  const oldMethod = descriptor.value;
  const newMethod = function (email: string, password: string, username?: string, birthday?: string, sex?: string) {
    if (username!.trim().length < 3) {
      throw  'Username must be 3 letter or more'
    }
    return oldMethod.apply(target, arguments);

  };
  descriptor.value = newMethod
}

 export function Email(target: any, propertyKey: string, parameterIndex: number) {
  const items = Reflect.getOwnMetadata('Email', target, propertyKey) ?? [];
  items.push(parameterIndex);
  Reflect.defineMetadata('Email', items, target, propertyKey);
 }

 function validateEmail (email: string) {
  if(email.trim().length < 5) {
    throw 'Email invalid format'
  }
 }

function validatePassword(password: string) {
  if (password.trim().length < 6) {
    throw 'Password is too short'
  }
}

export function Password (target: any, propertyKey: string, parameterIndex: number) {
  const items = Reflect.getOwnMetadata('Password', target, propertyKey) ?? [];
  items.push(parameterIndex);
  Reflect.defineMetadata('Password', items, target, propertyKey);
}


export function ValidateArguments(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
  const oldMethod = descriptor.value;

  const newMethod = function () {
    const emailParameters = Reflect.getOwnMetadata('Email', target, propertyKey);
    if (emailParameters) {
      for (const emailParameterIndex of emailParameters) {
        const email = arguments[emailParameterIndex];
        validateEmail(email);
      }
    }

    const passwordParameters = Reflect.getOwnMetadata('Password', target, propertyKey);
    if (passwordParameters) {
      for (const passwordParameterIndex of passwordParameters) {
        const password = arguments[passwordParameterIndex];
        validatePassword(password);
      }
    }
    return oldMethod.apply(target, arguments);
  };

  descriptor.value = newMethod
}

export function StringifyFirebaseError(target: any, propertyKey: string,
                                       descriptor: PropertyDescriptor) {
  const oldMethod = descriptor.value;

  const newMethod = async function () {

    try {
      // eslint-disable-next-line prefer-rest-params
      const result = await oldMethod.apply(target, arguments);
      return result;
    } catch (e) {
      const error = e as FirebaseError;
      throw error.message;
    }
  };

  descriptor.value = newMethod
}



