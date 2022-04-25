/*
export type  CredentialArguments = {
  email: 0,
  password: 1

}


export function ValidateCredentials(args: CredentialArguments = {email: 0, password: 1}) {

  return function (target: any, propertyKey: string,
                   descriptor: PropertyDescriptor) {
    console.log('ValidateCredentials initialized')
    const oldMethod = descriptor.value;

    const newMethod = function () {
      // eslint-disable-next-line prefer-rest-params
      const email = arguments[args.email];
      // eslint-disable-next-line prefer-rest-params
      const password = arguments[args.password];
      if (email.trim().length < 5) {
        throw 'Email is to short'
      }
      if (password.trim().length < 6) {
        throw 'Password is too short';
      }
      // eslint-disable-next-line prefer-rest-params
      return oldMethod.apply(target, arguments);
    };

    descriptor.value = newMethod
  }

}


export function UserDetails(target: any, propertyKey: string,
                            descriptor: PropertyDescriptor) {
  console.log('UserDetails initialized')
  const oldMethod = descriptor.value;

  const newMethod = function (email: string, password: string, username?: string, birthday?: string, sex?: string) {
    if (username!.trim().length < 3) {
      throw 'Username must be 3 letter or more'
    }
    // eslint-disable-next-line prefer-rest-params
    return oldMethod.apply(target, arguments);
  };

  descriptor.value = newMethod
}
*/



export type  CredentialArguments = {
  email: number,
  password: number
}


export function ValidateCredentials(args: CredentialArguments = {email: 0, password: 1}) {

  return function (target: any, propertyKey: string,
                   descriptor: PropertyDescriptor) {
    console.log('ValidateCredentials initialized')
    const oldMethod = descriptor.value;

    const newMethod = function () {
      // eslint-disable-next-line prefer-rest-params
      const email = arguments[args.email];
      // eslint-disable-next-line prefer-rest-params
      const password = arguments[args.password];
      if (email.trim().length < 5) {
        throw 'Email is to short'
      }
      if (password.trim().length < 6) {
        throw 'Password is too short';
      }
      // eslint-disable-next-line prefer-rest-params
      return oldMethod.apply(target, arguments);
    };

    descriptor.value = newMethod
  }

}


export function UserDetails(target: any, propertyKey: string,
                            descriptor: PropertyDescriptor) {
  console.log('UserDetails initialized')
  const oldMethod = descriptor.value;

  const newMethod = function (email: string, password: string, username?: string, birthday?: string, sex?: string) {
    if (username!.trim().length < 3) {
      throw 'Username must be 3 letter or more'
    }
    // eslint-disable-next-line prefer-rest-params
    return oldMethod.apply(target, arguments);
  };

  descriptor.value = newMethod
}
