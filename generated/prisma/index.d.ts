
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Course
 * 
 */
export type Course = $Result.DefaultSelection<Prisma.$CoursePayload>
/**
 * Model Test
 * 
 */
export type Test = $Result.DefaultSelection<Prisma.$TestPayload>
/**
 * Model Task
 * 
 */
export type Task = $Result.DefaultSelection<Prisma.$TaskPayload>
/**
 * Model UserTestProgress
 * 
 */
export type UserTestProgress = $Result.DefaultSelection<Prisma.$UserTestProgressPayload>
/**
 * Model UserTaskAnswer
 * 
 */
export type UserTaskAnswer = $Result.DefaultSelection<Prisma.$UserTaskAnswerPayload>
/**
 * Model Achievement
 * 
 */
export type Achievement = $Result.DefaultSelection<Prisma.$AchievementPayload>
/**
 * Model UserAchievement
 * 
 */
export type UserAchievement = $Result.DefaultSelection<Prisma.$UserAchievementPayload>
/**
 * Model WordStatistic
 * 
 */
export type WordStatistic = $Result.DefaultSelection<Prisma.$WordStatisticPayload>
/**
 * Model DailyActivity
 * 
 */
export type DailyActivity = $Result.DefaultSelection<Prisma.$DailyActivityPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const TaskType: {
  FILL_IN_THE_BLANK: 'FILL_IN_THE_BLANK',
  MATCHING: 'MATCHING',
  AUDIO_TRANSLATION: 'AUDIO_TRANSLATION'
};

export type TaskType = (typeof TaskType)[keyof typeof TaskType]


export const AchievementType: {
  AVATAR_UPLOADED: 'AVATAR_UPLOADED',
  DAYS_ACTIVE: 'DAYS_ACTIVE',
  WORDS_LEARNED: 'WORDS_LEARNED',
  TESTS_COMPLETED: 'TESTS_COMPLETED',
  REGISTRATION: 'REGISTRATION'
};

export type AchievementType = (typeof AchievementType)[keyof typeof AchievementType]


export const Difficulty: {
  BEGINNER: 'BEGINNER',
  ELEMENTARY: 'ELEMENTARY',
  INTERMEDIATE: 'INTERMEDIATE',
  UPPERINTERMEDIATE: 'UPPERINTERMEDIATE',
  ADVANCED: 'ADVANCED'
};

export type Difficulty = (typeof Difficulty)[keyof typeof Difficulty]

}

export type TaskType = $Enums.TaskType

export const TaskType: typeof $Enums.TaskType

export type AchievementType = $Enums.AchievementType

export const AchievementType: typeof $Enums.AchievementType

export type Difficulty = $Enums.Difficulty

export const Difficulty: typeof $Enums.Difficulty

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.course`: Exposes CRUD operations for the **Course** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Courses
    * const courses = await prisma.course.findMany()
    * ```
    */
  get course(): Prisma.CourseDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.test`: Exposes CRUD operations for the **Test** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tests
    * const tests = await prisma.test.findMany()
    * ```
    */
  get test(): Prisma.TestDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.task`: Exposes CRUD operations for the **Task** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tasks
    * const tasks = await prisma.task.findMany()
    * ```
    */
  get task(): Prisma.TaskDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userTestProgress`: Exposes CRUD operations for the **UserTestProgress** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserTestProgresses
    * const userTestProgresses = await prisma.userTestProgress.findMany()
    * ```
    */
  get userTestProgress(): Prisma.UserTestProgressDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userTaskAnswer`: Exposes CRUD operations for the **UserTaskAnswer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserTaskAnswers
    * const userTaskAnswers = await prisma.userTaskAnswer.findMany()
    * ```
    */
  get userTaskAnswer(): Prisma.UserTaskAnswerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.achievement`: Exposes CRUD operations for the **Achievement** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Achievements
    * const achievements = await prisma.achievement.findMany()
    * ```
    */
  get achievement(): Prisma.AchievementDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userAchievement`: Exposes CRUD operations for the **UserAchievement** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserAchievements
    * const userAchievements = await prisma.userAchievement.findMany()
    * ```
    */
  get userAchievement(): Prisma.UserAchievementDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.wordStatistic`: Exposes CRUD operations for the **WordStatistic** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WordStatistics
    * const wordStatistics = await prisma.wordStatistic.findMany()
    * ```
    */
  get wordStatistic(): Prisma.WordStatisticDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.dailyActivity`: Exposes CRUD operations for the **DailyActivity** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DailyActivities
    * const dailyActivities = await prisma.dailyActivity.findMany()
    * ```
    */
  get dailyActivity(): Prisma.DailyActivityDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Course: 'Course',
    Test: 'Test',
    Task: 'Task',
    UserTestProgress: 'UserTestProgress',
    UserTaskAnswer: 'UserTaskAnswer',
    Achievement: 'Achievement',
    UserAchievement: 'UserAchievement',
    WordStatistic: 'WordStatistic',
    DailyActivity: 'DailyActivity'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "course" | "test" | "task" | "userTestProgress" | "userTaskAnswer" | "achievement" | "userAchievement" | "wordStatistic" | "dailyActivity"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Course: {
        payload: Prisma.$CoursePayload<ExtArgs>
        fields: Prisma.CourseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CourseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CourseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          findFirst: {
            args: Prisma.CourseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CourseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          findMany: {
            args: Prisma.CourseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>[]
          }
          create: {
            args: Prisma.CourseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          createMany: {
            args: Prisma.CourseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CourseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>[]
          }
          delete: {
            args: Prisma.CourseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          update: {
            args: Prisma.CourseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          deleteMany: {
            args: Prisma.CourseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CourseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CourseUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>[]
          }
          upsert: {
            args: Prisma.CourseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          aggregate: {
            args: Prisma.CourseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCourse>
          }
          groupBy: {
            args: Prisma.CourseGroupByArgs<ExtArgs>
            result: $Utils.Optional<CourseGroupByOutputType>[]
          }
          count: {
            args: Prisma.CourseCountArgs<ExtArgs>
            result: $Utils.Optional<CourseCountAggregateOutputType> | number
          }
        }
      }
      Test: {
        payload: Prisma.$TestPayload<ExtArgs>
        fields: Prisma.TestFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TestFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TestFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestPayload>
          }
          findFirst: {
            args: Prisma.TestFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TestFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestPayload>
          }
          findMany: {
            args: Prisma.TestFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestPayload>[]
          }
          create: {
            args: Prisma.TestCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestPayload>
          }
          createMany: {
            args: Prisma.TestCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TestCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestPayload>[]
          }
          delete: {
            args: Prisma.TestDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestPayload>
          }
          update: {
            args: Prisma.TestUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestPayload>
          }
          deleteMany: {
            args: Prisma.TestDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TestUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TestUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestPayload>[]
          }
          upsert: {
            args: Prisma.TestUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestPayload>
          }
          aggregate: {
            args: Prisma.TestAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTest>
          }
          groupBy: {
            args: Prisma.TestGroupByArgs<ExtArgs>
            result: $Utils.Optional<TestGroupByOutputType>[]
          }
          count: {
            args: Prisma.TestCountArgs<ExtArgs>
            result: $Utils.Optional<TestCountAggregateOutputType> | number
          }
        }
      }
      Task: {
        payload: Prisma.$TaskPayload<ExtArgs>
        fields: Prisma.TaskFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TaskFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TaskFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          findFirst: {
            args: Prisma.TaskFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TaskFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          findMany: {
            args: Prisma.TaskFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>[]
          }
          create: {
            args: Prisma.TaskCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          createMany: {
            args: Prisma.TaskCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TaskCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>[]
          }
          delete: {
            args: Prisma.TaskDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          update: {
            args: Prisma.TaskUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          deleteMany: {
            args: Prisma.TaskDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TaskUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TaskUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>[]
          }
          upsert: {
            args: Prisma.TaskUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          aggregate: {
            args: Prisma.TaskAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTask>
          }
          groupBy: {
            args: Prisma.TaskGroupByArgs<ExtArgs>
            result: $Utils.Optional<TaskGroupByOutputType>[]
          }
          count: {
            args: Prisma.TaskCountArgs<ExtArgs>
            result: $Utils.Optional<TaskCountAggregateOutputType> | number
          }
        }
      }
      UserTestProgress: {
        payload: Prisma.$UserTestProgressPayload<ExtArgs>
        fields: Prisma.UserTestProgressFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserTestProgressFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserTestProgressPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserTestProgressFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserTestProgressPayload>
          }
          findFirst: {
            args: Prisma.UserTestProgressFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserTestProgressPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserTestProgressFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserTestProgressPayload>
          }
          findMany: {
            args: Prisma.UserTestProgressFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserTestProgressPayload>[]
          }
          create: {
            args: Prisma.UserTestProgressCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserTestProgressPayload>
          }
          createMany: {
            args: Prisma.UserTestProgressCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserTestProgressCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserTestProgressPayload>[]
          }
          delete: {
            args: Prisma.UserTestProgressDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserTestProgressPayload>
          }
          update: {
            args: Prisma.UserTestProgressUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserTestProgressPayload>
          }
          deleteMany: {
            args: Prisma.UserTestProgressDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserTestProgressUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserTestProgressUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserTestProgressPayload>[]
          }
          upsert: {
            args: Prisma.UserTestProgressUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserTestProgressPayload>
          }
          aggregate: {
            args: Prisma.UserTestProgressAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserTestProgress>
          }
          groupBy: {
            args: Prisma.UserTestProgressGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserTestProgressGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserTestProgressCountArgs<ExtArgs>
            result: $Utils.Optional<UserTestProgressCountAggregateOutputType> | number
          }
        }
      }
      UserTaskAnswer: {
        payload: Prisma.$UserTaskAnswerPayload<ExtArgs>
        fields: Prisma.UserTaskAnswerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserTaskAnswerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserTaskAnswerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserTaskAnswerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserTaskAnswerPayload>
          }
          findFirst: {
            args: Prisma.UserTaskAnswerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserTaskAnswerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserTaskAnswerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserTaskAnswerPayload>
          }
          findMany: {
            args: Prisma.UserTaskAnswerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserTaskAnswerPayload>[]
          }
          create: {
            args: Prisma.UserTaskAnswerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserTaskAnswerPayload>
          }
          createMany: {
            args: Prisma.UserTaskAnswerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserTaskAnswerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserTaskAnswerPayload>[]
          }
          delete: {
            args: Prisma.UserTaskAnswerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserTaskAnswerPayload>
          }
          update: {
            args: Prisma.UserTaskAnswerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserTaskAnswerPayload>
          }
          deleteMany: {
            args: Prisma.UserTaskAnswerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserTaskAnswerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserTaskAnswerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserTaskAnswerPayload>[]
          }
          upsert: {
            args: Prisma.UserTaskAnswerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserTaskAnswerPayload>
          }
          aggregate: {
            args: Prisma.UserTaskAnswerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserTaskAnswer>
          }
          groupBy: {
            args: Prisma.UserTaskAnswerGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserTaskAnswerGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserTaskAnswerCountArgs<ExtArgs>
            result: $Utils.Optional<UserTaskAnswerCountAggregateOutputType> | number
          }
        }
      }
      Achievement: {
        payload: Prisma.$AchievementPayload<ExtArgs>
        fields: Prisma.AchievementFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AchievementFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AchievementPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AchievementFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AchievementPayload>
          }
          findFirst: {
            args: Prisma.AchievementFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AchievementPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AchievementFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AchievementPayload>
          }
          findMany: {
            args: Prisma.AchievementFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AchievementPayload>[]
          }
          create: {
            args: Prisma.AchievementCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AchievementPayload>
          }
          createMany: {
            args: Prisma.AchievementCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AchievementCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AchievementPayload>[]
          }
          delete: {
            args: Prisma.AchievementDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AchievementPayload>
          }
          update: {
            args: Prisma.AchievementUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AchievementPayload>
          }
          deleteMany: {
            args: Prisma.AchievementDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AchievementUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AchievementUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AchievementPayload>[]
          }
          upsert: {
            args: Prisma.AchievementUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AchievementPayload>
          }
          aggregate: {
            args: Prisma.AchievementAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAchievement>
          }
          groupBy: {
            args: Prisma.AchievementGroupByArgs<ExtArgs>
            result: $Utils.Optional<AchievementGroupByOutputType>[]
          }
          count: {
            args: Prisma.AchievementCountArgs<ExtArgs>
            result: $Utils.Optional<AchievementCountAggregateOutputType> | number
          }
        }
      }
      UserAchievement: {
        payload: Prisma.$UserAchievementPayload<ExtArgs>
        fields: Prisma.UserAchievementFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserAchievementFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAchievementPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserAchievementFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAchievementPayload>
          }
          findFirst: {
            args: Prisma.UserAchievementFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAchievementPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserAchievementFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAchievementPayload>
          }
          findMany: {
            args: Prisma.UserAchievementFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAchievementPayload>[]
          }
          create: {
            args: Prisma.UserAchievementCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAchievementPayload>
          }
          createMany: {
            args: Prisma.UserAchievementCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserAchievementCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAchievementPayload>[]
          }
          delete: {
            args: Prisma.UserAchievementDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAchievementPayload>
          }
          update: {
            args: Prisma.UserAchievementUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAchievementPayload>
          }
          deleteMany: {
            args: Prisma.UserAchievementDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserAchievementUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserAchievementUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAchievementPayload>[]
          }
          upsert: {
            args: Prisma.UserAchievementUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAchievementPayload>
          }
          aggregate: {
            args: Prisma.UserAchievementAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserAchievement>
          }
          groupBy: {
            args: Prisma.UserAchievementGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserAchievementGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserAchievementCountArgs<ExtArgs>
            result: $Utils.Optional<UserAchievementCountAggregateOutputType> | number
          }
        }
      }
      WordStatistic: {
        payload: Prisma.$WordStatisticPayload<ExtArgs>
        fields: Prisma.WordStatisticFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WordStatisticFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WordStatisticPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WordStatisticFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WordStatisticPayload>
          }
          findFirst: {
            args: Prisma.WordStatisticFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WordStatisticPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WordStatisticFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WordStatisticPayload>
          }
          findMany: {
            args: Prisma.WordStatisticFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WordStatisticPayload>[]
          }
          create: {
            args: Prisma.WordStatisticCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WordStatisticPayload>
          }
          createMany: {
            args: Prisma.WordStatisticCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WordStatisticCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WordStatisticPayload>[]
          }
          delete: {
            args: Prisma.WordStatisticDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WordStatisticPayload>
          }
          update: {
            args: Prisma.WordStatisticUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WordStatisticPayload>
          }
          deleteMany: {
            args: Prisma.WordStatisticDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WordStatisticUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WordStatisticUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WordStatisticPayload>[]
          }
          upsert: {
            args: Prisma.WordStatisticUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WordStatisticPayload>
          }
          aggregate: {
            args: Prisma.WordStatisticAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWordStatistic>
          }
          groupBy: {
            args: Prisma.WordStatisticGroupByArgs<ExtArgs>
            result: $Utils.Optional<WordStatisticGroupByOutputType>[]
          }
          count: {
            args: Prisma.WordStatisticCountArgs<ExtArgs>
            result: $Utils.Optional<WordStatisticCountAggregateOutputType> | number
          }
        }
      }
      DailyActivity: {
        payload: Prisma.$DailyActivityPayload<ExtArgs>
        fields: Prisma.DailyActivityFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DailyActivityFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyActivityPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DailyActivityFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyActivityPayload>
          }
          findFirst: {
            args: Prisma.DailyActivityFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyActivityPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DailyActivityFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyActivityPayload>
          }
          findMany: {
            args: Prisma.DailyActivityFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyActivityPayload>[]
          }
          create: {
            args: Prisma.DailyActivityCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyActivityPayload>
          }
          createMany: {
            args: Prisma.DailyActivityCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DailyActivityCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyActivityPayload>[]
          }
          delete: {
            args: Prisma.DailyActivityDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyActivityPayload>
          }
          update: {
            args: Prisma.DailyActivityUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyActivityPayload>
          }
          deleteMany: {
            args: Prisma.DailyActivityDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DailyActivityUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DailyActivityUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyActivityPayload>[]
          }
          upsert: {
            args: Prisma.DailyActivityUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyActivityPayload>
          }
          aggregate: {
            args: Prisma.DailyActivityAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDailyActivity>
          }
          groupBy: {
            args: Prisma.DailyActivityGroupByArgs<ExtArgs>
            result: $Utils.Optional<DailyActivityGroupByOutputType>[]
          }
          count: {
            args: Prisma.DailyActivityCountArgs<ExtArgs>
            result: $Utils.Optional<DailyActivityCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    course?: CourseOmit
    test?: TestOmit
    task?: TaskOmit
    userTestProgress?: UserTestProgressOmit
    userTaskAnswer?: UserTaskAnswerOmit
    achievement?: AchievementOmit
    userAchievement?: UserAchievementOmit
    wordStatistic?: WordStatisticOmit
    dailyActivity?: DailyActivityOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    testProgress: number
    userAnswers: number
    userAchievement: number
    wordStats: number
    dailyStats: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    testProgress?: boolean | UserCountOutputTypeCountTestProgressArgs
    userAnswers?: boolean | UserCountOutputTypeCountUserAnswersArgs
    userAchievement?: boolean | UserCountOutputTypeCountUserAchievementArgs
    wordStats?: boolean | UserCountOutputTypeCountWordStatsArgs
    dailyStats?: boolean | UserCountOutputTypeCountDailyStatsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTestProgressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserTestProgressWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountUserAnswersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserTaskAnswerWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountUserAchievementArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserAchievementWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountWordStatsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WordStatisticWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountDailyStatsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DailyActivityWhereInput
  }


  /**
   * Count Type CourseCountOutputType
   */

  export type CourseCountOutputType = {
    tests: number
  }

  export type CourseCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tests?: boolean | CourseCountOutputTypeCountTestsArgs
  }

  // Custom InputTypes
  /**
   * CourseCountOutputType without action
   */
  export type CourseCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseCountOutputType
     */
    select?: CourseCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CourseCountOutputType without action
   */
  export type CourseCountOutputTypeCountTestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TestWhereInput
  }


  /**
   * Count Type TestCountOutputType
   */

  export type TestCountOutputType = {
    tasks: number
    progress: number
  }

  export type TestCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tasks?: boolean | TestCountOutputTypeCountTasksArgs
    progress?: boolean | TestCountOutputTypeCountProgressArgs
  }

  // Custom InputTypes
  /**
   * TestCountOutputType without action
   */
  export type TestCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestCountOutputType
     */
    select?: TestCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TestCountOutputType without action
   */
  export type TestCountOutputTypeCountTasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskWhereInput
  }

  /**
   * TestCountOutputType without action
   */
  export type TestCountOutputTypeCountProgressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserTestProgressWhereInput
  }


  /**
   * Count Type TaskCountOutputType
   */

  export type TaskCountOutputType = {
    userAnswers: number
  }

  export type TaskCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userAnswers?: boolean | TaskCountOutputTypeCountUserAnswersArgs
  }

  // Custom InputTypes
  /**
   * TaskCountOutputType without action
   */
  export type TaskCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskCountOutputType
     */
    select?: TaskCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TaskCountOutputType without action
   */
  export type TaskCountOutputTypeCountUserAnswersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserTaskAnswerWhereInput
  }


  /**
   * Count Type AchievementCountOutputType
   */

  export type AchievementCountOutputType = {
    users: number
  }

  export type AchievementCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | AchievementCountOutputTypeCountUsersArgs
  }

  // Custom InputTypes
  /**
   * AchievementCountOutputType without action
   */
  export type AchievementCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AchievementCountOutputType
     */
    select?: AchievementCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AchievementCountOutputType without action
   */
  export type AchievementCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserAchievementWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    name: string | null
    surname: string | null
    birthDate: Date | null
    phoneNumber: string | null
    email: string | null
    password: string | null
    avatarUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
    hashedRefreshToken: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    name: string | null
    surname: string | null
    birthDate: Date | null
    phoneNumber: string | null
    email: string | null
    password: string | null
    avatarUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
    hashedRefreshToken: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    surname: number
    birthDate: number
    phoneNumber: number
    email: number
    password: number
    avatarUrl: number
    createdAt: number
    updatedAt: number
    hashedRefreshToken: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    surname?: true
    birthDate?: true
    phoneNumber?: true
    email?: true
    password?: true
    avatarUrl?: true
    createdAt?: true
    updatedAt?: true
    hashedRefreshToken?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    surname?: true
    birthDate?: true
    phoneNumber?: true
    email?: true
    password?: true
    avatarUrl?: true
    createdAt?: true
    updatedAt?: true
    hashedRefreshToken?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    surname?: true
    birthDate?: true
    phoneNumber?: true
    email?: true
    password?: true
    avatarUrl?: true
    createdAt?: true
    updatedAt?: true
    hashedRefreshToken?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    name: string
    surname: string
    birthDate: Date
    phoneNumber: string
    email: string
    password: string
    avatarUrl: string | null
    createdAt: Date
    updatedAt: Date
    hashedRefreshToken: string | null
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    surname?: boolean
    birthDate?: boolean
    phoneNumber?: boolean
    email?: boolean
    password?: boolean
    avatarUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    hashedRefreshToken?: boolean
    testProgress?: boolean | User$testProgressArgs<ExtArgs>
    userAnswers?: boolean | User$userAnswersArgs<ExtArgs>
    userAchievement?: boolean | User$userAchievementArgs<ExtArgs>
    wordStats?: boolean | User$wordStatsArgs<ExtArgs>
    dailyStats?: boolean | User$dailyStatsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    surname?: boolean
    birthDate?: boolean
    phoneNumber?: boolean
    email?: boolean
    password?: boolean
    avatarUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    hashedRefreshToken?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    surname?: boolean
    birthDate?: boolean
    phoneNumber?: boolean
    email?: boolean
    password?: boolean
    avatarUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    hashedRefreshToken?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    surname?: boolean
    birthDate?: boolean
    phoneNumber?: boolean
    email?: boolean
    password?: boolean
    avatarUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    hashedRefreshToken?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "surname" | "birthDate" | "phoneNumber" | "email" | "password" | "avatarUrl" | "createdAt" | "updatedAt" | "hashedRefreshToken", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    testProgress?: boolean | User$testProgressArgs<ExtArgs>
    userAnswers?: boolean | User$userAnswersArgs<ExtArgs>
    userAchievement?: boolean | User$userAchievementArgs<ExtArgs>
    wordStats?: boolean | User$wordStatsArgs<ExtArgs>
    dailyStats?: boolean | User$dailyStatsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      testProgress: Prisma.$UserTestProgressPayload<ExtArgs>[]
      userAnswers: Prisma.$UserTaskAnswerPayload<ExtArgs>[]
      userAchievement: Prisma.$UserAchievementPayload<ExtArgs>[]
      wordStats: Prisma.$WordStatisticPayload<ExtArgs>[]
      dailyStats: Prisma.$DailyActivityPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      surname: string
      birthDate: Date
      phoneNumber: string
      email: string
      password: string
      avatarUrl: string | null
      createdAt: Date
      updatedAt: Date
      hashedRefreshToken: string | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    testProgress<T extends User$testProgressArgs<ExtArgs> = {}>(args?: Subset<T, User$testProgressArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserTestProgressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    userAnswers<T extends User$userAnswersArgs<ExtArgs> = {}>(args?: Subset<T, User$userAnswersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserTaskAnswerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    userAchievement<T extends User$userAchievementArgs<ExtArgs> = {}>(args?: Subset<T, User$userAchievementArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserAchievementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    wordStats<T extends User$wordStatsArgs<ExtArgs> = {}>(args?: Subset<T, User$wordStatsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WordStatisticPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    dailyStats<T extends User$dailyStatsArgs<ExtArgs> = {}>(args?: Subset<T, User$dailyStatsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DailyActivityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly name: FieldRef<"User", 'String'>
    readonly surname: FieldRef<"User", 'String'>
    readonly birthDate: FieldRef<"User", 'DateTime'>
    readonly phoneNumber: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly avatarUrl: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
    readonly hashedRefreshToken: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.testProgress
   */
  export type User$testProgressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserTestProgress
     */
    select?: UserTestProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserTestProgress
     */
    omit?: UserTestProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserTestProgressInclude<ExtArgs> | null
    where?: UserTestProgressWhereInput
    orderBy?: UserTestProgressOrderByWithRelationInput | UserTestProgressOrderByWithRelationInput[]
    cursor?: UserTestProgressWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserTestProgressScalarFieldEnum | UserTestProgressScalarFieldEnum[]
  }

  /**
   * User.userAnswers
   */
  export type User$userAnswersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserTaskAnswer
     */
    select?: UserTaskAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserTaskAnswer
     */
    omit?: UserTaskAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserTaskAnswerInclude<ExtArgs> | null
    where?: UserTaskAnswerWhereInput
    orderBy?: UserTaskAnswerOrderByWithRelationInput | UserTaskAnswerOrderByWithRelationInput[]
    cursor?: UserTaskAnswerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserTaskAnswerScalarFieldEnum | UserTaskAnswerScalarFieldEnum[]
  }

  /**
   * User.userAchievement
   */
  export type User$userAchievementArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAchievement
     */
    select?: UserAchievementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAchievement
     */
    omit?: UserAchievementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAchievementInclude<ExtArgs> | null
    where?: UserAchievementWhereInput
    orderBy?: UserAchievementOrderByWithRelationInput | UserAchievementOrderByWithRelationInput[]
    cursor?: UserAchievementWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserAchievementScalarFieldEnum | UserAchievementScalarFieldEnum[]
  }

  /**
   * User.wordStats
   */
  export type User$wordStatsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WordStatistic
     */
    select?: WordStatisticSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WordStatistic
     */
    omit?: WordStatisticOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WordStatisticInclude<ExtArgs> | null
    where?: WordStatisticWhereInput
    orderBy?: WordStatisticOrderByWithRelationInput | WordStatisticOrderByWithRelationInput[]
    cursor?: WordStatisticWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WordStatisticScalarFieldEnum | WordStatisticScalarFieldEnum[]
  }

  /**
   * User.dailyStats
   */
  export type User$dailyStatsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyActivity
     */
    select?: DailyActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyActivity
     */
    omit?: DailyActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyActivityInclude<ExtArgs> | null
    where?: DailyActivityWhereInput
    orderBy?: DailyActivityOrderByWithRelationInput | DailyActivityOrderByWithRelationInput[]
    cursor?: DailyActivityWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DailyActivityScalarFieldEnum | DailyActivityScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Course
   */

  export type AggregateCourse = {
    _count: CourseCountAggregateOutputType | null
    _avg: CourseAvgAggregateOutputType | null
    _sum: CourseSumAggregateOutputType | null
    _min: CourseMinAggregateOutputType | null
    _max: CourseMaxAggregateOutputType | null
  }

  export type CourseAvgAggregateOutputType = {
    id: number | null
  }

  export type CourseSumAggregateOutputType = {
    id: number | null
  }

  export type CourseMinAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    imageUrl: string | null
    difficulty: $Enums.Difficulty | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CourseMaxAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    imageUrl: string | null
    difficulty: $Enums.Difficulty | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CourseCountAggregateOutputType = {
    id: number
    title: number
    description: number
    imageUrl: number
    difficulty: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CourseAvgAggregateInputType = {
    id?: true
  }

  export type CourseSumAggregateInputType = {
    id?: true
  }

  export type CourseMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    imageUrl?: true
    difficulty?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CourseMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    imageUrl?: true
    difficulty?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CourseCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    imageUrl?: true
    difficulty?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CourseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Course to aggregate.
     */
    where?: CourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Courses to fetch.
     */
    orderBy?: CourseOrderByWithRelationInput | CourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Courses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Courses
    **/
    _count?: true | CourseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CourseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CourseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CourseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CourseMaxAggregateInputType
  }

  export type GetCourseAggregateType<T extends CourseAggregateArgs> = {
        [P in keyof T & keyof AggregateCourse]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCourse[P]>
      : GetScalarType<T[P], AggregateCourse[P]>
  }




  export type CourseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CourseWhereInput
    orderBy?: CourseOrderByWithAggregationInput | CourseOrderByWithAggregationInput[]
    by: CourseScalarFieldEnum[] | CourseScalarFieldEnum
    having?: CourseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CourseCountAggregateInputType | true
    _avg?: CourseAvgAggregateInputType
    _sum?: CourseSumAggregateInputType
    _min?: CourseMinAggregateInputType
    _max?: CourseMaxAggregateInputType
  }

  export type CourseGroupByOutputType = {
    id: number
    title: string
    description: string
    imageUrl: string | null
    difficulty: $Enums.Difficulty
    createdAt: Date
    updatedAt: Date
    _count: CourseCountAggregateOutputType | null
    _avg: CourseAvgAggregateOutputType | null
    _sum: CourseSumAggregateOutputType | null
    _min: CourseMinAggregateOutputType | null
    _max: CourseMaxAggregateOutputType | null
  }

  type GetCourseGroupByPayload<T extends CourseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CourseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CourseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CourseGroupByOutputType[P]>
            : GetScalarType<T[P], CourseGroupByOutputType[P]>
        }
      >
    >


  export type CourseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    imageUrl?: boolean
    difficulty?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tests?: boolean | Course$testsArgs<ExtArgs>
    _count?: boolean | CourseCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["course"]>

  export type CourseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    imageUrl?: boolean
    difficulty?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["course"]>

  export type CourseSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    imageUrl?: boolean
    difficulty?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["course"]>

  export type CourseSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    imageUrl?: boolean
    difficulty?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CourseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "imageUrl" | "difficulty" | "createdAt" | "updatedAt", ExtArgs["result"]["course"]>
  export type CourseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tests?: boolean | Course$testsArgs<ExtArgs>
    _count?: boolean | CourseCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CourseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CourseIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CoursePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Course"
    objects: {
      tests: Prisma.$TestPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      description: string
      imageUrl: string | null
      difficulty: $Enums.Difficulty
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["course"]>
    composites: {}
  }

  type CourseGetPayload<S extends boolean | null | undefined | CourseDefaultArgs> = $Result.GetResult<Prisma.$CoursePayload, S>

  type CourseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CourseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CourseCountAggregateInputType | true
    }

  export interface CourseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Course'], meta: { name: 'Course' } }
    /**
     * Find zero or one Course that matches the filter.
     * @param {CourseFindUniqueArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CourseFindUniqueArgs>(args: SelectSubset<T, CourseFindUniqueArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Course that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CourseFindUniqueOrThrowArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CourseFindUniqueOrThrowArgs>(args: SelectSubset<T, CourseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Course that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseFindFirstArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CourseFindFirstArgs>(args?: SelectSubset<T, CourseFindFirstArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Course that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseFindFirstOrThrowArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CourseFindFirstOrThrowArgs>(args?: SelectSubset<T, CourseFindFirstOrThrowArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Courses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Courses
     * const courses = await prisma.course.findMany()
     * 
     * // Get first 10 Courses
     * const courses = await prisma.course.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const courseWithIdOnly = await prisma.course.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CourseFindManyArgs>(args?: SelectSubset<T, CourseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Course.
     * @param {CourseCreateArgs} args - Arguments to create a Course.
     * @example
     * // Create one Course
     * const Course = await prisma.course.create({
     *   data: {
     *     // ... data to create a Course
     *   }
     * })
     * 
     */
    create<T extends CourseCreateArgs>(args: SelectSubset<T, CourseCreateArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Courses.
     * @param {CourseCreateManyArgs} args - Arguments to create many Courses.
     * @example
     * // Create many Courses
     * const course = await prisma.course.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CourseCreateManyArgs>(args?: SelectSubset<T, CourseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Courses and returns the data saved in the database.
     * @param {CourseCreateManyAndReturnArgs} args - Arguments to create many Courses.
     * @example
     * // Create many Courses
     * const course = await prisma.course.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Courses and only return the `id`
     * const courseWithIdOnly = await prisma.course.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CourseCreateManyAndReturnArgs>(args?: SelectSubset<T, CourseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Course.
     * @param {CourseDeleteArgs} args - Arguments to delete one Course.
     * @example
     * // Delete one Course
     * const Course = await prisma.course.delete({
     *   where: {
     *     // ... filter to delete one Course
     *   }
     * })
     * 
     */
    delete<T extends CourseDeleteArgs>(args: SelectSubset<T, CourseDeleteArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Course.
     * @param {CourseUpdateArgs} args - Arguments to update one Course.
     * @example
     * // Update one Course
     * const course = await prisma.course.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CourseUpdateArgs>(args: SelectSubset<T, CourseUpdateArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Courses.
     * @param {CourseDeleteManyArgs} args - Arguments to filter Courses to delete.
     * @example
     * // Delete a few Courses
     * const { count } = await prisma.course.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CourseDeleteManyArgs>(args?: SelectSubset<T, CourseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Courses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Courses
     * const course = await prisma.course.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CourseUpdateManyArgs>(args: SelectSubset<T, CourseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Courses and returns the data updated in the database.
     * @param {CourseUpdateManyAndReturnArgs} args - Arguments to update many Courses.
     * @example
     * // Update many Courses
     * const course = await prisma.course.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Courses and only return the `id`
     * const courseWithIdOnly = await prisma.course.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CourseUpdateManyAndReturnArgs>(args: SelectSubset<T, CourseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Course.
     * @param {CourseUpsertArgs} args - Arguments to update or create a Course.
     * @example
     * // Update or create a Course
     * const course = await prisma.course.upsert({
     *   create: {
     *     // ... data to create a Course
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Course we want to update
     *   }
     * })
     */
    upsert<T extends CourseUpsertArgs>(args: SelectSubset<T, CourseUpsertArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Courses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseCountArgs} args - Arguments to filter Courses to count.
     * @example
     * // Count the number of Courses
     * const count = await prisma.course.count({
     *   where: {
     *     // ... the filter for the Courses we want to count
     *   }
     * })
    **/
    count<T extends CourseCountArgs>(
      args?: Subset<T, CourseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CourseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Course.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CourseAggregateArgs>(args: Subset<T, CourseAggregateArgs>): Prisma.PrismaPromise<GetCourseAggregateType<T>>

    /**
     * Group by Course.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CourseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CourseGroupByArgs['orderBy'] }
        : { orderBy?: CourseGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CourseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCourseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Course model
   */
  readonly fields: CourseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Course.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CourseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tests<T extends Course$testsArgs<ExtArgs> = {}>(args?: Subset<T, Course$testsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Course model
   */
  interface CourseFieldRefs {
    readonly id: FieldRef<"Course", 'Int'>
    readonly title: FieldRef<"Course", 'String'>
    readonly description: FieldRef<"Course", 'String'>
    readonly imageUrl: FieldRef<"Course", 'String'>
    readonly difficulty: FieldRef<"Course", 'Difficulty'>
    readonly createdAt: FieldRef<"Course", 'DateTime'>
    readonly updatedAt: FieldRef<"Course", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Course findUnique
   */
  export type CourseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter, which Course to fetch.
     */
    where: CourseWhereUniqueInput
  }

  /**
   * Course findUniqueOrThrow
   */
  export type CourseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter, which Course to fetch.
     */
    where: CourseWhereUniqueInput
  }

  /**
   * Course findFirst
   */
  export type CourseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter, which Course to fetch.
     */
    where?: CourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Courses to fetch.
     */
    orderBy?: CourseOrderByWithRelationInput | CourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Courses.
     */
    cursor?: CourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Courses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Courses.
     */
    distinct?: CourseScalarFieldEnum | CourseScalarFieldEnum[]
  }

  /**
   * Course findFirstOrThrow
   */
  export type CourseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter, which Course to fetch.
     */
    where?: CourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Courses to fetch.
     */
    orderBy?: CourseOrderByWithRelationInput | CourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Courses.
     */
    cursor?: CourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Courses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Courses.
     */
    distinct?: CourseScalarFieldEnum | CourseScalarFieldEnum[]
  }

  /**
   * Course findMany
   */
  export type CourseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter, which Courses to fetch.
     */
    where?: CourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Courses to fetch.
     */
    orderBy?: CourseOrderByWithRelationInput | CourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Courses.
     */
    cursor?: CourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Courses.
     */
    skip?: number
    distinct?: CourseScalarFieldEnum | CourseScalarFieldEnum[]
  }

  /**
   * Course create
   */
  export type CourseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * The data needed to create a Course.
     */
    data: XOR<CourseCreateInput, CourseUncheckedCreateInput>
  }

  /**
   * Course createMany
   */
  export type CourseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Courses.
     */
    data: CourseCreateManyInput | CourseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Course createManyAndReturn
   */
  export type CourseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * The data used to create many Courses.
     */
    data: CourseCreateManyInput | CourseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Course update
   */
  export type CourseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * The data needed to update a Course.
     */
    data: XOR<CourseUpdateInput, CourseUncheckedUpdateInput>
    /**
     * Choose, which Course to update.
     */
    where: CourseWhereUniqueInput
  }

  /**
   * Course updateMany
   */
  export type CourseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Courses.
     */
    data: XOR<CourseUpdateManyMutationInput, CourseUncheckedUpdateManyInput>
    /**
     * Filter which Courses to update
     */
    where?: CourseWhereInput
    /**
     * Limit how many Courses to update.
     */
    limit?: number
  }

  /**
   * Course updateManyAndReturn
   */
  export type CourseUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * The data used to update Courses.
     */
    data: XOR<CourseUpdateManyMutationInput, CourseUncheckedUpdateManyInput>
    /**
     * Filter which Courses to update
     */
    where?: CourseWhereInput
    /**
     * Limit how many Courses to update.
     */
    limit?: number
  }

  /**
   * Course upsert
   */
  export type CourseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * The filter to search for the Course to update in case it exists.
     */
    where: CourseWhereUniqueInput
    /**
     * In case the Course found by the `where` argument doesn't exist, create a new Course with this data.
     */
    create: XOR<CourseCreateInput, CourseUncheckedCreateInput>
    /**
     * In case the Course was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CourseUpdateInput, CourseUncheckedUpdateInput>
  }

  /**
   * Course delete
   */
  export type CourseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter which Course to delete.
     */
    where: CourseWhereUniqueInput
  }

  /**
   * Course deleteMany
   */
  export type CourseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Courses to delete
     */
    where?: CourseWhereInput
    /**
     * Limit how many Courses to delete.
     */
    limit?: number
  }

  /**
   * Course.tests
   */
  export type Course$testsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Test
     */
    select?: TestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Test
     */
    omit?: TestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestInclude<ExtArgs> | null
    where?: TestWhereInput
    orderBy?: TestOrderByWithRelationInput | TestOrderByWithRelationInput[]
    cursor?: TestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TestScalarFieldEnum | TestScalarFieldEnum[]
  }

  /**
   * Course without action
   */
  export type CourseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
  }


  /**
   * Model Test
   */

  export type AggregateTest = {
    _count: TestCountAggregateOutputType | null
    _avg: TestAvgAggregateOutputType | null
    _sum: TestSumAggregateOutputType | null
    _min: TestMinAggregateOutputType | null
    _max: TestMaxAggregateOutputType | null
  }

  export type TestAvgAggregateOutputType = {
    id: number | null
    courseId: number | null
  }

  export type TestSumAggregateOutputType = {
    id: number | null
    courseId: number | null
  }

  export type TestMinAggregateOutputType = {
    id: number | null
    title: string | null
    courseId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TestMaxAggregateOutputType = {
    id: number | null
    title: string | null
    courseId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TestCountAggregateOutputType = {
    id: number
    title: number
    courseId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TestAvgAggregateInputType = {
    id?: true
    courseId?: true
  }

  export type TestSumAggregateInputType = {
    id?: true
    courseId?: true
  }

  export type TestMinAggregateInputType = {
    id?: true
    title?: true
    courseId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TestMaxAggregateInputType = {
    id?: true
    title?: true
    courseId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TestCountAggregateInputType = {
    id?: true
    title?: true
    courseId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TestAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Test to aggregate.
     */
    where?: TestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tests to fetch.
     */
    orderBy?: TestOrderByWithRelationInput | TestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tests
    **/
    _count?: true | TestCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TestAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TestSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TestMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TestMaxAggregateInputType
  }

  export type GetTestAggregateType<T extends TestAggregateArgs> = {
        [P in keyof T & keyof AggregateTest]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTest[P]>
      : GetScalarType<T[P], AggregateTest[P]>
  }




  export type TestGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TestWhereInput
    orderBy?: TestOrderByWithAggregationInput | TestOrderByWithAggregationInput[]
    by: TestScalarFieldEnum[] | TestScalarFieldEnum
    having?: TestScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TestCountAggregateInputType | true
    _avg?: TestAvgAggregateInputType
    _sum?: TestSumAggregateInputType
    _min?: TestMinAggregateInputType
    _max?: TestMaxAggregateInputType
  }

  export type TestGroupByOutputType = {
    id: number
    title: string
    courseId: number
    createdAt: Date
    updatedAt: Date
    _count: TestCountAggregateOutputType | null
    _avg: TestAvgAggregateOutputType | null
    _sum: TestSumAggregateOutputType | null
    _min: TestMinAggregateOutputType | null
    _max: TestMaxAggregateOutputType | null
  }

  type GetTestGroupByPayload<T extends TestGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TestGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TestGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TestGroupByOutputType[P]>
            : GetScalarType<T[P], TestGroupByOutputType[P]>
        }
      >
    >


  export type TestSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    courseId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    course?: boolean | CourseDefaultArgs<ExtArgs>
    tasks?: boolean | Test$tasksArgs<ExtArgs>
    progress?: boolean | Test$progressArgs<ExtArgs>
    _count?: boolean | TestCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["test"]>

  export type TestSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    courseId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["test"]>

  export type TestSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    courseId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["test"]>

  export type TestSelectScalar = {
    id?: boolean
    title?: boolean
    courseId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TestOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "courseId" | "createdAt" | "updatedAt", ExtArgs["result"]["test"]>
  export type TestInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    course?: boolean | CourseDefaultArgs<ExtArgs>
    tasks?: boolean | Test$tasksArgs<ExtArgs>
    progress?: boolean | Test$progressArgs<ExtArgs>
    _count?: boolean | TestCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TestIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }
  export type TestIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }

  export type $TestPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Test"
    objects: {
      course: Prisma.$CoursePayload<ExtArgs>
      tasks: Prisma.$TaskPayload<ExtArgs>[]
      progress: Prisma.$UserTestProgressPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      courseId: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["test"]>
    composites: {}
  }

  type TestGetPayload<S extends boolean | null | undefined | TestDefaultArgs> = $Result.GetResult<Prisma.$TestPayload, S>

  type TestCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TestFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TestCountAggregateInputType | true
    }

  export interface TestDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Test'], meta: { name: 'Test' } }
    /**
     * Find zero or one Test that matches the filter.
     * @param {TestFindUniqueArgs} args - Arguments to find a Test
     * @example
     * // Get one Test
     * const test = await prisma.test.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TestFindUniqueArgs>(args: SelectSubset<T, TestFindUniqueArgs<ExtArgs>>): Prisma__TestClient<$Result.GetResult<Prisma.$TestPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Test that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TestFindUniqueOrThrowArgs} args - Arguments to find a Test
     * @example
     * // Get one Test
     * const test = await prisma.test.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TestFindUniqueOrThrowArgs>(args: SelectSubset<T, TestFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TestClient<$Result.GetResult<Prisma.$TestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Test that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestFindFirstArgs} args - Arguments to find a Test
     * @example
     * // Get one Test
     * const test = await prisma.test.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TestFindFirstArgs>(args?: SelectSubset<T, TestFindFirstArgs<ExtArgs>>): Prisma__TestClient<$Result.GetResult<Prisma.$TestPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Test that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestFindFirstOrThrowArgs} args - Arguments to find a Test
     * @example
     * // Get one Test
     * const test = await prisma.test.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TestFindFirstOrThrowArgs>(args?: SelectSubset<T, TestFindFirstOrThrowArgs<ExtArgs>>): Prisma__TestClient<$Result.GetResult<Prisma.$TestPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tests
     * const tests = await prisma.test.findMany()
     * 
     * // Get first 10 Tests
     * const tests = await prisma.test.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const testWithIdOnly = await prisma.test.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TestFindManyArgs>(args?: SelectSubset<T, TestFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Test.
     * @param {TestCreateArgs} args - Arguments to create a Test.
     * @example
     * // Create one Test
     * const Test = await prisma.test.create({
     *   data: {
     *     // ... data to create a Test
     *   }
     * })
     * 
     */
    create<T extends TestCreateArgs>(args: SelectSubset<T, TestCreateArgs<ExtArgs>>): Prisma__TestClient<$Result.GetResult<Prisma.$TestPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tests.
     * @param {TestCreateManyArgs} args - Arguments to create many Tests.
     * @example
     * // Create many Tests
     * const test = await prisma.test.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TestCreateManyArgs>(args?: SelectSubset<T, TestCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tests and returns the data saved in the database.
     * @param {TestCreateManyAndReturnArgs} args - Arguments to create many Tests.
     * @example
     * // Create many Tests
     * const test = await prisma.test.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tests and only return the `id`
     * const testWithIdOnly = await prisma.test.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TestCreateManyAndReturnArgs>(args?: SelectSubset<T, TestCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TestPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Test.
     * @param {TestDeleteArgs} args - Arguments to delete one Test.
     * @example
     * // Delete one Test
     * const Test = await prisma.test.delete({
     *   where: {
     *     // ... filter to delete one Test
     *   }
     * })
     * 
     */
    delete<T extends TestDeleteArgs>(args: SelectSubset<T, TestDeleteArgs<ExtArgs>>): Prisma__TestClient<$Result.GetResult<Prisma.$TestPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Test.
     * @param {TestUpdateArgs} args - Arguments to update one Test.
     * @example
     * // Update one Test
     * const test = await prisma.test.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TestUpdateArgs>(args: SelectSubset<T, TestUpdateArgs<ExtArgs>>): Prisma__TestClient<$Result.GetResult<Prisma.$TestPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tests.
     * @param {TestDeleteManyArgs} args - Arguments to filter Tests to delete.
     * @example
     * // Delete a few Tests
     * const { count } = await prisma.test.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TestDeleteManyArgs>(args?: SelectSubset<T, TestDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tests
     * const test = await prisma.test.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TestUpdateManyArgs>(args: SelectSubset<T, TestUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tests and returns the data updated in the database.
     * @param {TestUpdateManyAndReturnArgs} args - Arguments to update many Tests.
     * @example
     * // Update many Tests
     * const test = await prisma.test.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tests and only return the `id`
     * const testWithIdOnly = await prisma.test.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TestUpdateManyAndReturnArgs>(args: SelectSubset<T, TestUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TestPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Test.
     * @param {TestUpsertArgs} args - Arguments to update or create a Test.
     * @example
     * // Update or create a Test
     * const test = await prisma.test.upsert({
     *   create: {
     *     // ... data to create a Test
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Test we want to update
     *   }
     * })
     */
    upsert<T extends TestUpsertArgs>(args: SelectSubset<T, TestUpsertArgs<ExtArgs>>): Prisma__TestClient<$Result.GetResult<Prisma.$TestPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestCountArgs} args - Arguments to filter Tests to count.
     * @example
     * // Count the number of Tests
     * const count = await prisma.test.count({
     *   where: {
     *     // ... the filter for the Tests we want to count
     *   }
     * })
    **/
    count<T extends TestCountArgs>(
      args?: Subset<T, TestCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TestCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Test.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TestAggregateArgs>(args: Subset<T, TestAggregateArgs>): Prisma.PrismaPromise<GetTestAggregateType<T>>

    /**
     * Group by Test.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TestGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TestGroupByArgs['orderBy'] }
        : { orderBy?: TestGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Test model
   */
  readonly fields: TestFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Test.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TestClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    course<T extends CourseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CourseDefaultArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    tasks<T extends Test$tasksArgs<ExtArgs> = {}>(args?: Subset<T, Test$tasksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    progress<T extends Test$progressArgs<ExtArgs> = {}>(args?: Subset<T, Test$progressArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserTestProgressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Test model
   */
  interface TestFieldRefs {
    readonly id: FieldRef<"Test", 'Int'>
    readonly title: FieldRef<"Test", 'String'>
    readonly courseId: FieldRef<"Test", 'Int'>
    readonly createdAt: FieldRef<"Test", 'DateTime'>
    readonly updatedAt: FieldRef<"Test", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Test findUnique
   */
  export type TestFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Test
     */
    select?: TestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Test
     */
    omit?: TestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestInclude<ExtArgs> | null
    /**
     * Filter, which Test to fetch.
     */
    where: TestWhereUniqueInput
  }

  /**
   * Test findUniqueOrThrow
   */
  export type TestFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Test
     */
    select?: TestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Test
     */
    omit?: TestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestInclude<ExtArgs> | null
    /**
     * Filter, which Test to fetch.
     */
    where: TestWhereUniqueInput
  }

  /**
   * Test findFirst
   */
  export type TestFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Test
     */
    select?: TestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Test
     */
    omit?: TestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestInclude<ExtArgs> | null
    /**
     * Filter, which Test to fetch.
     */
    where?: TestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tests to fetch.
     */
    orderBy?: TestOrderByWithRelationInput | TestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tests.
     */
    cursor?: TestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tests.
     */
    distinct?: TestScalarFieldEnum | TestScalarFieldEnum[]
  }

  /**
   * Test findFirstOrThrow
   */
  export type TestFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Test
     */
    select?: TestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Test
     */
    omit?: TestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestInclude<ExtArgs> | null
    /**
     * Filter, which Test to fetch.
     */
    where?: TestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tests to fetch.
     */
    orderBy?: TestOrderByWithRelationInput | TestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tests.
     */
    cursor?: TestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tests.
     */
    distinct?: TestScalarFieldEnum | TestScalarFieldEnum[]
  }

  /**
   * Test findMany
   */
  export type TestFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Test
     */
    select?: TestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Test
     */
    omit?: TestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestInclude<ExtArgs> | null
    /**
     * Filter, which Tests to fetch.
     */
    where?: TestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tests to fetch.
     */
    orderBy?: TestOrderByWithRelationInput | TestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tests.
     */
    cursor?: TestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tests.
     */
    skip?: number
    distinct?: TestScalarFieldEnum | TestScalarFieldEnum[]
  }

  /**
   * Test create
   */
  export type TestCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Test
     */
    select?: TestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Test
     */
    omit?: TestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestInclude<ExtArgs> | null
    /**
     * The data needed to create a Test.
     */
    data: XOR<TestCreateInput, TestUncheckedCreateInput>
  }

  /**
   * Test createMany
   */
  export type TestCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tests.
     */
    data: TestCreateManyInput | TestCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Test createManyAndReturn
   */
  export type TestCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Test
     */
    select?: TestSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Test
     */
    omit?: TestOmit<ExtArgs> | null
    /**
     * The data used to create many Tests.
     */
    data: TestCreateManyInput | TestCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Test update
   */
  export type TestUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Test
     */
    select?: TestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Test
     */
    omit?: TestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestInclude<ExtArgs> | null
    /**
     * The data needed to update a Test.
     */
    data: XOR<TestUpdateInput, TestUncheckedUpdateInput>
    /**
     * Choose, which Test to update.
     */
    where: TestWhereUniqueInput
  }

  /**
   * Test updateMany
   */
  export type TestUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tests.
     */
    data: XOR<TestUpdateManyMutationInput, TestUncheckedUpdateManyInput>
    /**
     * Filter which Tests to update
     */
    where?: TestWhereInput
    /**
     * Limit how many Tests to update.
     */
    limit?: number
  }

  /**
   * Test updateManyAndReturn
   */
  export type TestUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Test
     */
    select?: TestSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Test
     */
    omit?: TestOmit<ExtArgs> | null
    /**
     * The data used to update Tests.
     */
    data: XOR<TestUpdateManyMutationInput, TestUncheckedUpdateManyInput>
    /**
     * Filter which Tests to update
     */
    where?: TestWhereInput
    /**
     * Limit how many Tests to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Test upsert
   */
  export type TestUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Test
     */
    select?: TestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Test
     */
    omit?: TestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestInclude<ExtArgs> | null
    /**
     * The filter to search for the Test to update in case it exists.
     */
    where: TestWhereUniqueInput
    /**
     * In case the Test found by the `where` argument doesn't exist, create a new Test with this data.
     */
    create: XOR<TestCreateInput, TestUncheckedCreateInput>
    /**
     * In case the Test was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TestUpdateInput, TestUncheckedUpdateInput>
  }

  /**
   * Test delete
   */
  export type TestDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Test
     */
    select?: TestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Test
     */
    omit?: TestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestInclude<ExtArgs> | null
    /**
     * Filter which Test to delete.
     */
    where: TestWhereUniqueInput
  }

  /**
   * Test deleteMany
   */
  export type TestDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tests to delete
     */
    where?: TestWhereInput
    /**
     * Limit how many Tests to delete.
     */
    limit?: number
  }

  /**
   * Test.tasks
   */
  export type Test$tasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    where?: TaskWhereInput
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    cursor?: TaskWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * Test.progress
   */
  export type Test$progressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserTestProgress
     */
    select?: UserTestProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserTestProgress
     */
    omit?: UserTestProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserTestProgressInclude<ExtArgs> | null
    where?: UserTestProgressWhereInput
    orderBy?: UserTestProgressOrderByWithRelationInput | UserTestProgressOrderByWithRelationInput[]
    cursor?: UserTestProgressWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserTestProgressScalarFieldEnum | UserTestProgressScalarFieldEnum[]
  }

  /**
   * Test without action
   */
  export type TestDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Test
     */
    select?: TestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Test
     */
    omit?: TestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestInclude<ExtArgs> | null
  }


  /**
   * Model Task
   */

  export type AggregateTask = {
    _count: TaskCountAggregateOutputType | null
    _avg: TaskAvgAggregateOutputType | null
    _sum: TaskSumAggregateOutputType | null
    _min: TaskMinAggregateOutputType | null
    _max: TaskMaxAggregateOutputType | null
  }

  export type TaskAvgAggregateOutputType = {
    id: number | null
    testId: number | null
  }

  export type TaskSumAggregateOutputType = {
    id: number | null
    testId: number | null
  }

  export type TaskMinAggregateOutputType = {
    id: number | null
    question: string | null
    type: $Enums.TaskType | null
    testId: number | null
  }

  export type TaskMaxAggregateOutputType = {
    id: number | null
    question: string | null
    type: $Enums.TaskType | null
    testId: number | null
  }

  export type TaskCountAggregateOutputType = {
    id: number
    question: number
    options: number
    correctAnswer: number
    type: number
    testId: number
    _all: number
  }


  export type TaskAvgAggregateInputType = {
    id?: true
    testId?: true
  }

  export type TaskSumAggregateInputType = {
    id?: true
    testId?: true
  }

  export type TaskMinAggregateInputType = {
    id?: true
    question?: true
    type?: true
    testId?: true
  }

  export type TaskMaxAggregateInputType = {
    id?: true
    question?: true
    type?: true
    testId?: true
  }

  export type TaskCountAggregateInputType = {
    id?: true
    question?: true
    options?: true
    correctAnswer?: true
    type?: true
    testId?: true
    _all?: true
  }

  export type TaskAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Task to aggregate.
     */
    where?: TaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tasks
    **/
    _count?: true | TaskCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TaskAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TaskSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TaskMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TaskMaxAggregateInputType
  }

  export type GetTaskAggregateType<T extends TaskAggregateArgs> = {
        [P in keyof T & keyof AggregateTask]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTask[P]>
      : GetScalarType<T[P], AggregateTask[P]>
  }




  export type TaskGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskWhereInput
    orderBy?: TaskOrderByWithAggregationInput | TaskOrderByWithAggregationInput[]
    by: TaskScalarFieldEnum[] | TaskScalarFieldEnum
    having?: TaskScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TaskCountAggregateInputType | true
    _avg?: TaskAvgAggregateInputType
    _sum?: TaskSumAggregateInputType
    _min?: TaskMinAggregateInputType
    _max?: TaskMaxAggregateInputType
  }

  export type TaskGroupByOutputType = {
    id: number
    question: string
    options: string[]
    correctAnswer: string[]
    type: $Enums.TaskType
    testId: number
    _count: TaskCountAggregateOutputType | null
    _avg: TaskAvgAggregateOutputType | null
    _sum: TaskSumAggregateOutputType | null
    _min: TaskMinAggregateOutputType | null
    _max: TaskMaxAggregateOutputType | null
  }

  type GetTaskGroupByPayload<T extends TaskGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TaskGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TaskGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TaskGroupByOutputType[P]>
            : GetScalarType<T[P], TaskGroupByOutputType[P]>
        }
      >
    >


  export type TaskSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    question?: boolean
    options?: boolean
    correctAnswer?: boolean
    type?: boolean
    testId?: boolean
    test?: boolean | TestDefaultArgs<ExtArgs>
    userAnswers?: boolean | Task$userAnswersArgs<ExtArgs>
    _count?: boolean | TaskCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["task"]>

  export type TaskSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    question?: boolean
    options?: boolean
    correctAnswer?: boolean
    type?: boolean
    testId?: boolean
    test?: boolean | TestDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["task"]>

  export type TaskSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    question?: boolean
    options?: boolean
    correctAnswer?: boolean
    type?: boolean
    testId?: boolean
    test?: boolean | TestDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["task"]>

  export type TaskSelectScalar = {
    id?: boolean
    question?: boolean
    options?: boolean
    correctAnswer?: boolean
    type?: boolean
    testId?: boolean
  }

  export type TaskOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "question" | "options" | "correctAnswer" | "type" | "testId", ExtArgs["result"]["task"]>
  export type TaskInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    test?: boolean | TestDefaultArgs<ExtArgs>
    userAnswers?: boolean | Task$userAnswersArgs<ExtArgs>
    _count?: boolean | TaskCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TaskIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    test?: boolean | TestDefaultArgs<ExtArgs>
  }
  export type TaskIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    test?: boolean | TestDefaultArgs<ExtArgs>
  }

  export type $TaskPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Task"
    objects: {
      test: Prisma.$TestPayload<ExtArgs>
      userAnswers: Prisma.$UserTaskAnswerPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      question: string
      options: string[]
      correctAnswer: string[]
      type: $Enums.TaskType
      testId: number
    }, ExtArgs["result"]["task"]>
    composites: {}
  }

  type TaskGetPayload<S extends boolean | null | undefined | TaskDefaultArgs> = $Result.GetResult<Prisma.$TaskPayload, S>

  type TaskCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TaskFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TaskCountAggregateInputType | true
    }

  export interface TaskDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Task'], meta: { name: 'Task' } }
    /**
     * Find zero or one Task that matches the filter.
     * @param {TaskFindUniqueArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TaskFindUniqueArgs>(args: SelectSubset<T, TaskFindUniqueArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Task that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TaskFindUniqueOrThrowArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TaskFindUniqueOrThrowArgs>(args: SelectSubset<T, TaskFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Task that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskFindFirstArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TaskFindFirstArgs>(args?: SelectSubset<T, TaskFindFirstArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Task that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskFindFirstOrThrowArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TaskFindFirstOrThrowArgs>(args?: SelectSubset<T, TaskFindFirstOrThrowArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tasks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tasks
     * const tasks = await prisma.task.findMany()
     * 
     * // Get first 10 Tasks
     * const tasks = await prisma.task.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const taskWithIdOnly = await prisma.task.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TaskFindManyArgs>(args?: SelectSubset<T, TaskFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Task.
     * @param {TaskCreateArgs} args - Arguments to create a Task.
     * @example
     * // Create one Task
     * const Task = await prisma.task.create({
     *   data: {
     *     // ... data to create a Task
     *   }
     * })
     * 
     */
    create<T extends TaskCreateArgs>(args: SelectSubset<T, TaskCreateArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tasks.
     * @param {TaskCreateManyArgs} args - Arguments to create many Tasks.
     * @example
     * // Create many Tasks
     * const task = await prisma.task.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TaskCreateManyArgs>(args?: SelectSubset<T, TaskCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tasks and returns the data saved in the database.
     * @param {TaskCreateManyAndReturnArgs} args - Arguments to create many Tasks.
     * @example
     * // Create many Tasks
     * const task = await prisma.task.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tasks and only return the `id`
     * const taskWithIdOnly = await prisma.task.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TaskCreateManyAndReturnArgs>(args?: SelectSubset<T, TaskCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Task.
     * @param {TaskDeleteArgs} args - Arguments to delete one Task.
     * @example
     * // Delete one Task
     * const Task = await prisma.task.delete({
     *   where: {
     *     // ... filter to delete one Task
     *   }
     * })
     * 
     */
    delete<T extends TaskDeleteArgs>(args: SelectSubset<T, TaskDeleteArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Task.
     * @param {TaskUpdateArgs} args - Arguments to update one Task.
     * @example
     * // Update one Task
     * const task = await prisma.task.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TaskUpdateArgs>(args: SelectSubset<T, TaskUpdateArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tasks.
     * @param {TaskDeleteManyArgs} args - Arguments to filter Tasks to delete.
     * @example
     * // Delete a few Tasks
     * const { count } = await prisma.task.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TaskDeleteManyArgs>(args?: SelectSubset<T, TaskDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tasks
     * const task = await prisma.task.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TaskUpdateManyArgs>(args: SelectSubset<T, TaskUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tasks and returns the data updated in the database.
     * @param {TaskUpdateManyAndReturnArgs} args - Arguments to update many Tasks.
     * @example
     * // Update many Tasks
     * const task = await prisma.task.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tasks and only return the `id`
     * const taskWithIdOnly = await prisma.task.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TaskUpdateManyAndReturnArgs>(args: SelectSubset<T, TaskUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Task.
     * @param {TaskUpsertArgs} args - Arguments to update or create a Task.
     * @example
     * // Update or create a Task
     * const task = await prisma.task.upsert({
     *   create: {
     *     // ... data to create a Task
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Task we want to update
     *   }
     * })
     */
    upsert<T extends TaskUpsertArgs>(args: SelectSubset<T, TaskUpsertArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskCountArgs} args - Arguments to filter Tasks to count.
     * @example
     * // Count the number of Tasks
     * const count = await prisma.task.count({
     *   where: {
     *     // ... the filter for the Tasks we want to count
     *   }
     * })
    **/
    count<T extends TaskCountArgs>(
      args?: Subset<T, TaskCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TaskCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Task.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TaskAggregateArgs>(args: Subset<T, TaskAggregateArgs>): Prisma.PrismaPromise<GetTaskAggregateType<T>>

    /**
     * Group by Task.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TaskGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TaskGroupByArgs['orderBy'] }
        : { orderBy?: TaskGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TaskGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTaskGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Task model
   */
  readonly fields: TaskFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Task.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TaskClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    test<T extends TestDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TestDefaultArgs<ExtArgs>>): Prisma__TestClient<$Result.GetResult<Prisma.$TestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    userAnswers<T extends Task$userAnswersArgs<ExtArgs> = {}>(args?: Subset<T, Task$userAnswersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserTaskAnswerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Task model
   */
  interface TaskFieldRefs {
    readonly id: FieldRef<"Task", 'Int'>
    readonly question: FieldRef<"Task", 'String'>
    readonly options: FieldRef<"Task", 'String[]'>
    readonly correctAnswer: FieldRef<"Task", 'String[]'>
    readonly type: FieldRef<"Task", 'TaskType'>
    readonly testId: FieldRef<"Task", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Task findUnique
   */
  export type TaskFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Task to fetch.
     */
    where: TaskWhereUniqueInput
  }

  /**
   * Task findUniqueOrThrow
   */
  export type TaskFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Task to fetch.
     */
    where: TaskWhereUniqueInput
  }

  /**
   * Task findFirst
   */
  export type TaskFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Task to fetch.
     */
    where?: TaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tasks.
     */
    cursor?: TaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tasks.
     */
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * Task findFirstOrThrow
   */
  export type TaskFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Task to fetch.
     */
    where?: TaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tasks.
     */
    cursor?: TaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tasks.
     */
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * Task findMany
   */
  export type TaskFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Tasks to fetch.
     */
    where?: TaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tasks.
     */
    cursor?: TaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * Task create
   */
  export type TaskCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * The data needed to create a Task.
     */
    data: XOR<TaskCreateInput, TaskUncheckedCreateInput>
  }

  /**
   * Task createMany
   */
  export type TaskCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tasks.
     */
    data: TaskCreateManyInput | TaskCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Task createManyAndReturn
   */
  export type TaskCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * The data used to create many Tasks.
     */
    data: TaskCreateManyInput | TaskCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Task update
   */
  export type TaskUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * The data needed to update a Task.
     */
    data: XOR<TaskUpdateInput, TaskUncheckedUpdateInput>
    /**
     * Choose, which Task to update.
     */
    where: TaskWhereUniqueInput
  }

  /**
   * Task updateMany
   */
  export type TaskUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tasks.
     */
    data: XOR<TaskUpdateManyMutationInput, TaskUncheckedUpdateManyInput>
    /**
     * Filter which Tasks to update
     */
    where?: TaskWhereInput
    /**
     * Limit how many Tasks to update.
     */
    limit?: number
  }

  /**
   * Task updateManyAndReturn
   */
  export type TaskUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * The data used to update Tasks.
     */
    data: XOR<TaskUpdateManyMutationInput, TaskUncheckedUpdateManyInput>
    /**
     * Filter which Tasks to update
     */
    where?: TaskWhereInput
    /**
     * Limit how many Tasks to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Task upsert
   */
  export type TaskUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * The filter to search for the Task to update in case it exists.
     */
    where: TaskWhereUniqueInput
    /**
     * In case the Task found by the `where` argument doesn't exist, create a new Task with this data.
     */
    create: XOR<TaskCreateInput, TaskUncheckedCreateInput>
    /**
     * In case the Task was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TaskUpdateInput, TaskUncheckedUpdateInput>
  }

  /**
   * Task delete
   */
  export type TaskDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter which Task to delete.
     */
    where: TaskWhereUniqueInput
  }

  /**
   * Task deleteMany
   */
  export type TaskDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tasks to delete
     */
    where?: TaskWhereInput
    /**
     * Limit how many Tasks to delete.
     */
    limit?: number
  }

  /**
   * Task.userAnswers
   */
  export type Task$userAnswersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserTaskAnswer
     */
    select?: UserTaskAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserTaskAnswer
     */
    omit?: UserTaskAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserTaskAnswerInclude<ExtArgs> | null
    where?: UserTaskAnswerWhereInput
    orderBy?: UserTaskAnswerOrderByWithRelationInput | UserTaskAnswerOrderByWithRelationInput[]
    cursor?: UserTaskAnswerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserTaskAnswerScalarFieldEnum | UserTaskAnswerScalarFieldEnum[]
  }

  /**
   * Task without action
   */
  export type TaskDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
  }


  /**
   * Model UserTestProgress
   */

  export type AggregateUserTestProgress = {
    _count: UserTestProgressCountAggregateOutputType | null
    _avg: UserTestProgressAvgAggregateOutputType | null
    _sum: UserTestProgressSumAggregateOutputType | null
    _min: UserTestProgressMinAggregateOutputType | null
    _max: UserTestProgressMaxAggregateOutputType | null
  }

  export type UserTestProgressAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    testId: number | null
    score: number | null
  }

  export type UserTestProgressSumAggregateOutputType = {
    id: number | null
    userId: number | null
    testId: number | null
    score: number | null
  }

  export type UserTestProgressMinAggregateOutputType = {
    id: number | null
    userId: number | null
    testId: number | null
    completed: boolean | null
    score: number | null
    completedAt: Date | null
  }

  export type UserTestProgressMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    testId: number | null
    completed: boolean | null
    score: number | null
    completedAt: Date | null
  }

  export type UserTestProgressCountAggregateOutputType = {
    id: number
    userId: number
    testId: number
    completed: number
    score: number
    completedAt: number
    _all: number
  }


  export type UserTestProgressAvgAggregateInputType = {
    id?: true
    userId?: true
    testId?: true
    score?: true
  }

  export type UserTestProgressSumAggregateInputType = {
    id?: true
    userId?: true
    testId?: true
    score?: true
  }

  export type UserTestProgressMinAggregateInputType = {
    id?: true
    userId?: true
    testId?: true
    completed?: true
    score?: true
    completedAt?: true
  }

  export type UserTestProgressMaxAggregateInputType = {
    id?: true
    userId?: true
    testId?: true
    completed?: true
    score?: true
    completedAt?: true
  }

  export type UserTestProgressCountAggregateInputType = {
    id?: true
    userId?: true
    testId?: true
    completed?: true
    score?: true
    completedAt?: true
    _all?: true
  }

  export type UserTestProgressAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserTestProgress to aggregate.
     */
    where?: UserTestProgressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserTestProgresses to fetch.
     */
    orderBy?: UserTestProgressOrderByWithRelationInput | UserTestProgressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserTestProgressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserTestProgresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserTestProgresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserTestProgresses
    **/
    _count?: true | UserTestProgressCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserTestProgressAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserTestProgressSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserTestProgressMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserTestProgressMaxAggregateInputType
  }

  export type GetUserTestProgressAggregateType<T extends UserTestProgressAggregateArgs> = {
        [P in keyof T & keyof AggregateUserTestProgress]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserTestProgress[P]>
      : GetScalarType<T[P], AggregateUserTestProgress[P]>
  }




  export type UserTestProgressGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserTestProgressWhereInput
    orderBy?: UserTestProgressOrderByWithAggregationInput | UserTestProgressOrderByWithAggregationInput[]
    by: UserTestProgressScalarFieldEnum[] | UserTestProgressScalarFieldEnum
    having?: UserTestProgressScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserTestProgressCountAggregateInputType | true
    _avg?: UserTestProgressAvgAggregateInputType
    _sum?: UserTestProgressSumAggregateInputType
    _min?: UserTestProgressMinAggregateInputType
    _max?: UserTestProgressMaxAggregateInputType
  }

  export type UserTestProgressGroupByOutputType = {
    id: number
    userId: number
    testId: number
    completed: boolean
    score: number | null
    completedAt: Date | null
    _count: UserTestProgressCountAggregateOutputType | null
    _avg: UserTestProgressAvgAggregateOutputType | null
    _sum: UserTestProgressSumAggregateOutputType | null
    _min: UserTestProgressMinAggregateOutputType | null
    _max: UserTestProgressMaxAggregateOutputType | null
  }

  type GetUserTestProgressGroupByPayload<T extends UserTestProgressGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserTestProgressGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserTestProgressGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserTestProgressGroupByOutputType[P]>
            : GetScalarType<T[P], UserTestProgressGroupByOutputType[P]>
        }
      >
    >


  export type UserTestProgressSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    testId?: boolean
    completed?: boolean
    score?: boolean
    completedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    test?: boolean | TestDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userTestProgress"]>

  export type UserTestProgressSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    testId?: boolean
    completed?: boolean
    score?: boolean
    completedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    test?: boolean | TestDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userTestProgress"]>

  export type UserTestProgressSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    testId?: boolean
    completed?: boolean
    score?: boolean
    completedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    test?: boolean | TestDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userTestProgress"]>

  export type UserTestProgressSelectScalar = {
    id?: boolean
    userId?: boolean
    testId?: boolean
    completed?: boolean
    score?: boolean
    completedAt?: boolean
  }

  export type UserTestProgressOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "testId" | "completed" | "score" | "completedAt", ExtArgs["result"]["userTestProgress"]>
  export type UserTestProgressInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    test?: boolean | TestDefaultArgs<ExtArgs>
  }
  export type UserTestProgressIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    test?: boolean | TestDefaultArgs<ExtArgs>
  }
  export type UserTestProgressIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    test?: boolean | TestDefaultArgs<ExtArgs>
  }

  export type $UserTestProgressPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserTestProgress"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      test: Prisma.$TestPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      testId: number
      completed: boolean
      score: number | null
      completedAt: Date | null
    }, ExtArgs["result"]["userTestProgress"]>
    composites: {}
  }

  type UserTestProgressGetPayload<S extends boolean | null | undefined | UserTestProgressDefaultArgs> = $Result.GetResult<Prisma.$UserTestProgressPayload, S>

  type UserTestProgressCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserTestProgressFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserTestProgressCountAggregateInputType | true
    }

  export interface UserTestProgressDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserTestProgress'], meta: { name: 'UserTestProgress' } }
    /**
     * Find zero or one UserTestProgress that matches the filter.
     * @param {UserTestProgressFindUniqueArgs} args - Arguments to find a UserTestProgress
     * @example
     * // Get one UserTestProgress
     * const userTestProgress = await prisma.userTestProgress.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserTestProgressFindUniqueArgs>(args: SelectSubset<T, UserTestProgressFindUniqueArgs<ExtArgs>>): Prisma__UserTestProgressClient<$Result.GetResult<Prisma.$UserTestProgressPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserTestProgress that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserTestProgressFindUniqueOrThrowArgs} args - Arguments to find a UserTestProgress
     * @example
     * // Get one UserTestProgress
     * const userTestProgress = await prisma.userTestProgress.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserTestProgressFindUniqueOrThrowArgs>(args: SelectSubset<T, UserTestProgressFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserTestProgressClient<$Result.GetResult<Prisma.$UserTestProgressPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserTestProgress that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserTestProgressFindFirstArgs} args - Arguments to find a UserTestProgress
     * @example
     * // Get one UserTestProgress
     * const userTestProgress = await prisma.userTestProgress.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserTestProgressFindFirstArgs>(args?: SelectSubset<T, UserTestProgressFindFirstArgs<ExtArgs>>): Prisma__UserTestProgressClient<$Result.GetResult<Prisma.$UserTestProgressPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserTestProgress that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserTestProgressFindFirstOrThrowArgs} args - Arguments to find a UserTestProgress
     * @example
     * // Get one UserTestProgress
     * const userTestProgress = await prisma.userTestProgress.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserTestProgressFindFirstOrThrowArgs>(args?: SelectSubset<T, UserTestProgressFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserTestProgressClient<$Result.GetResult<Prisma.$UserTestProgressPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserTestProgresses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserTestProgressFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserTestProgresses
     * const userTestProgresses = await prisma.userTestProgress.findMany()
     * 
     * // Get first 10 UserTestProgresses
     * const userTestProgresses = await prisma.userTestProgress.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userTestProgressWithIdOnly = await prisma.userTestProgress.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserTestProgressFindManyArgs>(args?: SelectSubset<T, UserTestProgressFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserTestProgressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserTestProgress.
     * @param {UserTestProgressCreateArgs} args - Arguments to create a UserTestProgress.
     * @example
     * // Create one UserTestProgress
     * const UserTestProgress = await prisma.userTestProgress.create({
     *   data: {
     *     // ... data to create a UserTestProgress
     *   }
     * })
     * 
     */
    create<T extends UserTestProgressCreateArgs>(args: SelectSubset<T, UserTestProgressCreateArgs<ExtArgs>>): Prisma__UserTestProgressClient<$Result.GetResult<Prisma.$UserTestProgressPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserTestProgresses.
     * @param {UserTestProgressCreateManyArgs} args - Arguments to create many UserTestProgresses.
     * @example
     * // Create many UserTestProgresses
     * const userTestProgress = await prisma.userTestProgress.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserTestProgressCreateManyArgs>(args?: SelectSubset<T, UserTestProgressCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserTestProgresses and returns the data saved in the database.
     * @param {UserTestProgressCreateManyAndReturnArgs} args - Arguments to create many UserTestProgresses.
     * @example
     * // Create many UserTestProgresses
     * const userTestProgress = await prisma.userTestProgress.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserTestProgresses and only return the `id`
     * const userTestProgressWithIdOnly = await prisma.userTestProgress.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserTestProgressCreateManyAndReturnArgs>(args?: SelectSubset<T, UserTestProgressCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserTestProgressPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserTestProgress.
     * @param {UserTestProgressDeleteArgs} args - Arguments to delete one UserTestProgress.
     * @example
     * // Delete one UserTestProgress
     * const UserTestProgress = await prisma.userTestProgress.delete({
     *   where: {
     *     // ... filter to delete one UserTestProgress
     *   }
     * })
     * 
     */
    delete<T extends UserTestProgressDeleteArgs>(args: SelectSubset<T, UserTestProgressDeleteArgs<ExtArgs>>): Prisma__UserTestProgressClient<$Result.GetResult<Prisma.$UserTestProgressPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserTestProgress.
     * @param {UserTestProgressUpdateArgs} args - Arguments to update one UserTestProgress.
     * @example
     * // Update one UserTestProgress
     * const userTestProgress = await prisma.userTestProgress.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserTestProgressUpdateArgs>(args: SelectSubset<T, UserTestProgressUpdateArgs<ExtArgs>>): Prisma__UserTestProgressClient<$Result.GetResult<Prisma.$UserTestProgressPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserTestProgresses.
     * @param {UserTestProgressDeleteManyArgs} args - Arguments to filter UserTestProgresses to delete.
     * @example
     * // Delete a few UserTestProgresses
     * const { count } = await prisma.userTestProgress.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserTestProgressDeleteManyArgs>(args?: SelectSubset<T, UserTestProgressDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserTestProgresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserTestProgressUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserTestProgresses
     * const userTestProgress = await prisma.userTestProgress.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserTestProgressUpdateManyArgs>(args: SelectSubset<T, UserTestProgressUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserTestProgresses and returns the data updated in the database.
     * @param {UserTestProgressUpdateManyAndReturnArgs} args - Arguments to update many UserTestProgresses.
     * @example
     * // Update many UserTestProgresses
     * const userTestProgress = await prisma.userTestProgress.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserTestProgresses and only return the `id`
     * const userTestProgressWithIdOnly = await prisma.userTestProgress.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserTestProgressUpdateManyAndReturnArgs>(args: SelectSubset<T, UserTestProgressUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserTestProgressPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserTestProgress.
     * @param {UserTestProgressUpsertArgs} args - Arguments to update or create a UserTestProgress.
     * @example
     * // Update or create a UserTestProgress
     * const userTestProgress = await prisma.userTestProgress.upsert({
     *   create: {
     *     // ... data to create a UserTestProgress
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserTestProgress we want to update
     *   }
     * })
     */
    upsert<T extends UserTestProgressUpsertArgs>(args: SelectSubset<T, UserTestProgressUpsertArgs<ExtArgs>>): Prisma__UserTestProgressClient<$Result.GetResult<Prisma.$UserTestProgressPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserTestProgresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserTestProgressCountArgs} args - Arguments to filter UserTestProgresses to count.
     * @example
     * // Count the number of UserTestProgresses
     * const count = await prisma.userTestProgress.count({
     *   where: {
     *     // ... the filter for the UserTestProgresses we want to count
     *   }
     * })
    **/
    count<T extends UserTestProgressCountArgs>(
      args?: Subset<T, UserTestProgressCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserTestProgressCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserTestProgress.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserTestProgressAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserTestProgressAggregateArgs>(args: Subset<T, UserTestProgressAggregateArgs>): Prisma.PrismaPromise<GetUserTestProgressAggregateType<T>>

    /**
     * Group by UserTestProgress.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserTestProgressGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserTestProgressGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserTestProgressGroupByArgs['orderBy'] }
        : { orderBy?: UserTestProgressGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserTestProgressGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserTestProgressGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserTestProgress model
   */
  readonly fields: UserTestProgressFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserTestProgress.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserTestProgressClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    test<T extends TestDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TestDefaultArgs<ExtArgs>>): Prisma__TestClient<$Result.GetResult<Prisma.$TestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserTestProgress model
   */
  interface UserTestProgressFieldRefs {
    readonly id: FieldRef<"UserTestProgress", 'Int'>
    readonly userId: FieldRef<"UserTestProgress", 'Int'>
    readonly testId: FieldRef<"UserTestProgress", 'Int'>
    readonly completed: FieldRef<"UserTestProgress", 'Boolean'>
    readonly score: FieldRef<"UserTestProgress", 'Int'>
    readonly completedAt: FieldRef<"UserTestProgress", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserTestProgress findUnique
   */
  export type UserTestProgressFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserTestProgress
     */
    select?: UserTestProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserTestProgress
     */
    omit?: UserTestProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserTestProgressInclude<ExtArgs> | null
    /**
     * Filter, which UserTestProgress to fetch.
     */
    where: UserTestProgressWhereUniqueInput
  }

  /**
   * UserTestProgress findUniqueOrThrow
   */
  export type UserTestProgressFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserTestProgress
     */
    select?: UserTestProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserTestProgress
     */
    omit?: UserTestProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserTestProgressInclude<ExtArgs> | null
    /**
     * Filter, which UserTestProgress to fetch.
     */
    where: UserTestProgressWhereUniqueInput
  }

  /**
   * UserTestProgress findFirst
   */
  export type UserTestProgressFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserTestProgress
     */
    select?: UserTestProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserTestProgress
     */
    omit?: UserTestProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserTestProgressInclude<ExtArgs> | null
    /**
     * Filter, which UserTestProgress to fetch.
     */
    where?: UserTestProgressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserTestProgresses to fetch.
     */
    orderBy?: UserTestProgressOrderByWithRelationInput | UserTestProgressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserTestProgresses.
     */
    cursor?: UserTestProgressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserTestProgresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserTestProgresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserTestProgresses.
     */
    distinct?: UserTestProgressScalarFieldEnum | UserTestProgressScalarFieldEnum[]
  }

  /**
   * UserTestProgress findFirstOrThrow
   */
  export type UserTestProgressFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserTestProgress
     */
    select?: UserTestProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserTestProgress
     */
    omit?: UserTestProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserTestProgressInclude<ExtArgs> | null
    /**
     * Filter, which UserTestProgress to fetch.
     */
    where?: UserTestProgressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserTestProgresses to fetch.
     */
    orderBy?: UserTestProgressOrderByWithRelationInput | UserTestProgressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserTestProgresses.
     */
    cursor?: UserTestProgressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserTestProgresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserTestProgresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserTestProgresses.
     */
    distinct?: UserTestProgressScalarFieldEnum | UserTestProgressScalarFieldEnum[]
  }

  /**
   * UserTestProgress findMany
   */
  export type UserTestProgressFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserTestProgress
     */
    select?: UserTestProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserTestProgress
     */
    omit?: UserTestProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserTestProgressInclude<ExtArgs> | null
    /**
     * Filter, which UserTestProgresses to fetch.
     */
    where?: UserTestProgressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserTestProgresses to fetch.
     */
    orderBy?: UserTestProgressOrderByWithRelationInput | UserTestProgressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserTestProgresses.
     */
    cursor?: UserTestProgressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserTestProgresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserTestProgresses.
     */
    skip?: number
    distinct?: UserTestProgressScalarFieldEnum | UserTestProgressScalarFieldEnum[]
  }

  /**
   * UserTestProgress create
   */
  export type UserTestProgressCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserTestProgress
     */
    select?: UserTestProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserTestProgress
     */
    omit?: UserTestProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserTestProgressInclude<ExtArgs> | null
    /**
     * The data needed to create a UserTestProgress.
     */
    data: XOR<UserTestProgressCreateInput, UserTestProgressUncheckedCreateInput>
  }

  /**
   * UserTestProgress createMany
   */
  export type UserTestProgressCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserTestProgresses.
     */
    data: UserTestProgressCreateManyInput | UserTestProgressCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserTestProgress createManyAndReturn
   */
  export type UserTestProgressCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserTestProgress
     */
    select?: UserTestProgressSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserTestProgress
     */
    omit?: UserTestProgressOmit<ExtArgs> | null
    /**
     * The data used to create many UserTestProgresses.
     */
    data: UserTestProgressCreateManyInput | UserTestProgressCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserTestProgressIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserTestProgress update
   */
  export type UserTestProgressUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserTestProgress
     */
    select?: UserTestProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserTestProgress
     */
    omit?: UserTestProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserTestProgressInclude<ExtArgs> | null
    /**
     * The data needed to update a UserTestProgress.
     */
    data: XOR<UserTestProgressUpdateInput, UserTestProgressUncheckedUpdateInput>
    /**
     * Choose, which UserTestProgress to update.
     */
    where: UserTestProgressWhereUniqueInput
  }

  /**
   * UserTestProgress updateMany
   */
  export type UserTestProgressUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserTestProgresses.
     */
    data: XOR<UserTestProgressUpdateManyMutationInput, UserTestProgressUncheckedUpdateManyInput>
    /**
     * Filter which UserTestProgresses to update
     */
    where?: UserTestProgressWhereInput
    /**
     * Limit how many UserTestProgresses to update.
     */
    limit?: number
  }

  /**
   * UserTestProgress updateManyAndReturn
   */
  export type UserTestProgressUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserTestProgress
     */
    select?: UserTestProgressSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserTestProgress
     */
    omit?: UserTestProgressOmit<ExtArgs> | null
    /**
     * The data used to update UserTestProgresses.
     */
    data: XOR<UserTestProgressUpdateManyMutationInput, UserTestProgressUncheckedUpdateManyInput>
    /**
     * Filter which UserTestProgresses to update
     */
    where?: UserTestProgressWhereInput
    /**
     * Limit how many UserTestProgresses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserTestProgressIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserTestProgress upsert
   */
  export type UserTestProgressUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserTestProgress
     */
    select?: UserTestProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserTestProgress
     */
    omit?: UserTestProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserTestProgressInclude<ExtArgs> | null
    /**
     * The filter to search for the UserTestProgress to update in case it exists.
     */
    where: UserTestProgressWhereUniqueInput
    /**
     * In case the UserTestProgress found by the `where` argument doesn't exist, create a new UserTestProgress with this data.
     */
    create: XOR<UserTestProgressCreateInput, UserTestProgressUncheckedCreateInput>
    /**
     * In case the UserTestProgress was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserTestProgressUpdateInput, UserTestProgressUncheckedUpdateInput>
  }

  /**
   * UserTestProgress delete
   */
  export type UserTestProgressDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserTestProgress
     */
    select?: UserTestProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserTestProgress
     */
    omit?: UserTestProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserTestProgressInclude<ExtArgs> | null
    /**
     * Filter which UserTestProgress to delete.
     */
    where: UserTestProgressWhereUniqueInput
  }

  /**
   * UserTestProgress deleteMany
   */
  export type UserTestProgressDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserTestProgresses to delete
     */
    where?: UserTestProgressWhereInput
    /**
     * Limit how many UserTestProgresses to delete.
     */
    limit?: number
  }

  /**
   * UserTestProgress without action
   */
  export type UserTestProgressDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserTestProgress
     */
    select?: UserTestProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserTestProgress
     */
    omit?: UserTestProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserTestProgressInclude<ExtArgs> | null
  }


  /**
   * Model UserTaskAnswer
   */

  export type AggregateUserTaskAnswer = {
    _count: UserTaskAnswerCountAggregateOutputType | null
    _avg: UserTaskAnswerAvgAggregateOutputType | null
    _sum: UserTaskAnswerSumAggregateOutputType | null
    _min: UserTaskAnswerMinAggregateOutputType | null
    _max: UserTaskAnswerMaxAggregateOutputType | null
  }

  export type UserTaskAnswerAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    taskId: number | null
  }

  export type UserTaskAnswerSumAggregateOutputType = {
    id: number | null
    userId: number | null
    taskId: number | null
  }

  export type UserTaskAnswerMinAggregateOutputType = {
    id: number | null
    userId: number | null
    taskId: number | null
    answer: string | null
    isCorrect: boolean | null
  }

  export type UserTaskAnswerMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    taskId: number | null
    answer: string | null
    isCorrect: boolean | null
  }

  export type UserTaskAnswerCountAggregateOutputType = {
    id: number
    userId: number
    taskId: number
    answer: number
    isCorrect: number
    _all: number
  }


  export type UserTaskAnswerAvgAggregateInputType = {
    id?: true
    userId?: true
    taskId?: true
  }

  export type UserTaskAnswerSumAggregateInputType = {
    id?: true
    userId?: true
    taskId?: true
  }

  export type UserTaskAnswerMinAggregateInputType = {
    id?: true
    userId?: true
    taskId?: true
    answer?: true
    isCorrect?: true
  }

  export type UserTaskAnswerMaxAggregateInputType = {
    id?: true
    userId?: true
    taskId?: true
    answer?: true
    isCorrect?: true
  }

  export type UserTaskAnswerCountAggregateInputType = {
    id?: true
    userId?: true
    taskId?: true
    answer?: true
    isCorrect?: true
    _all?: true
  }

  export type UserTaskAnswerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserTaskAnswer to aggregate.
     */
    where?: UserTaskAnswerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserTaskAnswers to fetch.
     */
    orderBy?: UserTaskAnswerOrderByWithRelationInput | UserTaskAnswerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserTaskAnswerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserTaskAnswers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserTaskAnswers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserTaskAnswers
    **/
    _count?: true | UserTaskAnswerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserTaskAnswerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserTaskAnswerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserTaskAnswerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserTaskAnswerMaxAggregateInputType
  }

  export type GetUserTaskAnswerAggregateType<T extends UserTaskAnswerAggregateArgs> = {
        [P in keyof T & keyof AggregateUserTaskAnswer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserTaskAnswer[P]>
      : GetScalarType<T[P], AggregateUserTaskAnswer[P]>
  }




  export type UserTaskAnswerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserTaskAnswerWhereInput
    orderBy?: UserTaskAnswerOrderByWithAggregationInput | UserTaskAnswerOrderByWithAggregationInput[]
    by: UserTaskAnswerScalarFieldEnum[] | UserTaskAnswerScalarFieldEnum
    having?: UserTaskAnswerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserTaskAnswerCountAggregateInputType | true
    _avg?: UserTaskAnswerAvgAggregateInputType
    _sum?: UserTaskAnswerSumAggregateInputType
    _min?: UserTaskAnswerMinAggregateInputType
    _max?: UserTaskAnswerMaxAggregateInputType
  }

  export type UserTaskAnswerGroupByOutputType = {
    id: number
    userId: number
    taskId: number
    answer: string
    isCorrect: boolean
    _count: UserTaskAnswerCountAggregateOutputType | null
    _avg: UserTaskAnswerAvgAggregateOutputType | null
    _sum: UserTaskAnswerSumAggregateOutputType | null
    _min: UserTaskAnswerMinAggregateOutputType | null
    _max: UserTaskAnswerMaxAggregateOutputType | null
  }

  type GetUserTaskAnswerGroupByPayload<T extends UserTaskAnswerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserTaskAnswerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserTaskAnswerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserTaskAnswerGroupByOutputType[P]>
            : GetScalarType<T[P], UserTaskAnswerGroupByOutputType[P]>
        }
      >
    >


  export type UserTaskAnswerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    taskId?: boolean
    answer?: boolean
    isCorrect?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    task?: boolean | TaskDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userTaskAnswer"]>

  export type UserTaskAnswerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    taskId?: boolean
    answer?: boolean
    isCorrect?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    task?: boolean | TaskDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userTaskAnswer"]>

  export type UserTaskAnswerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    taskId?: boolean
    answer?: boolean
    isCorrect?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    task?: boolean | TaskDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userTaskAnswer"]>

  export type UserTaskAnswerSelectScalar = {
    id?: boolean
    userId?: boolean
    taskId?: boolean
    answer?: boolean
    isCorrect?: boolean
  }

  export type UserTaskAnswerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "taskId" | "answer" | "isCorrect", ExtArgs["result"]["userTaskAnswer"]>
  export type UserTaskAnswerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    task?: boolean | TaskDefaultArgs<ExtArgs>
  }
  export type UserTaskAnswerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    task?: boolean | TaskDefaultArgs<ExtArgs>
  }
  export type UserTaskAnswerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    task?: boolean | TaskDefaultArgs<ExtArgs>
  }

  export type $UserTaskAnswerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserTaskAnswer"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      task: Prisma.$TaskPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      taskId: number
      answer: string
      isCorrect: boolean
    }, ExtArgs["result"]["userTaskAnswer"]>
    composites: {}
  }

  type UserTaskAnswerGetPayload<S extends boolean | null | undefined | UserTaskAnswerDefaultArgs> = $Result.GetResult<Prisma.$UserTaskAnswerPayload, S>

  type UserTaskAnswerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserTaskAnswerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserTaskAnswerCountAggregateInputType | true
    }

  export interface UserTaskAnswerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserTaskAnswer'], meta: { name: 'UserTaskAnswer' } }
    /**
     * Find zero or one UserTaskAnswer that matches the filter.
     * @param {UserTaskAnswerFindUniqueArgs} args - Arguments to find a UserTaskAnswer
     * @example
     * // Get one UserTaskAnswer
     * const userTaskAnswer = await prisma.userTaskAnswer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserTaskAnswerFindUniqueArgs>(args: SelectSubset<T, UserTaskAnswerFindUniqueArgs<ExtArgs>>): Prisma__UserTaskAnswerClient<$Result.GetResult<Prisma.$UserTaskAnswerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserTaskAnswer that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserTaskAnswerFindUniqueOrThrowArgs} args - Arguments to find a UserTaskAnswer
     * @example
     * // Get one UserTaskAnswer
     * const userTaskAnswer = await prisma.userTaskAnswer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserTaskAnswerFindUniqueOrThrowArgs>(args: SelectSubset<T, UserTaskAnswerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserTaskAnswerClient<$Result.GetResult<Prisma.$UserTaskAnswerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserTaskAnswer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserTaskAnswerFindFirstArgs} args - Arguments to find a UserTaskAnswer
     * @example
     * // Get one UserTaskAnswer
     * const userTaskAnswer = await prisma.userTaskAnswer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserTaskAnswerFindFirstArgs>(args?: SelectSubset<T, UserTaskAnswerFindFirstArgs<ExtArgs>>): Prisma__UserTaskAnswerClient<$Result.GetResult<Prisma.$UserTaskAnswerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserTaskAnswer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserTaskAnswerFindFirstOrThrowArgs} args - Arguments to find a UserTaskAnswer
     * @example
     * // Get one UserTaskAnswer
     * const userTaskAnswer = await prisma.userTaskAnswer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserTaskAnswerFindFirstOrThrowArgs>(args?: SelectSubset<T, UserTaskAnswerFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserTaskAnswerClient<$Result.GetResult<Prisma.$UserTaskAnswerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserTaskAnswers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserTaskAnswerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserTaskAnswers
     * const userTaskAnswers = await prisma.userTaskAnswer.findMany()
     * 
     * // Get first 10 UserTaskAnswers
     * const userTaskAnswers = await prisma.userTaskAnswer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userTaskAnswerWithIdOnly = await prisma.userTaskAnswer.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserTaskAnswerFindManyArgs>(args?: SelectSubset<T, UserTaskAnswerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserTaskAnswerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserTaskAnswer.
     * @param {UserTaskAnswerCreateArgs} args - Arguments to create a UserTaskAnswer.
     * @example
     * // Create one UserTaskAnswer
     * const UserTaskAnswer = await prisma.userTaskAnswer.create({
     *   data: {
     *     // ... data to create a UserTaskAnswer
     *   }
     * })
     * 
     */
    create<T extends UserTaskAnswerCreateArgs>(args: SelectSubset<T, UserTaskAnswerCreateArgs<ExtArgs>>): Prisma__UserTaskAnswerClient<$Result.GetResult<Prisma.$UserTaskAnswerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserTaskAnswers.
     * @param {UserTaskAnswerCreateManyArgs} args - Arguments to create many UserTaskAnswers.
     * @example
     * // Create many UserTaskAnswers
     * const userTaskAnswer = await prisma.userTaskAnswer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserTaskAnswerCreateManyArgs>(args?: SelectSubset<T, UserTaskAnswerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserTaskAnswers and returns the data saved in the database.
     * @param {UserTaskAnswerCreateManyAndReturnArgs} args - Arguments to create many UserTaskAnswers.
     * @example
     * // Create many UserTaskAnswers
     * const userTaskAnswer = await prisma.userTaskAnswer.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserTaskAnswers and only return the `id`
     * const userTaskAnswerWithIdOnly = await prisma.userTaskAnswer.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserTaskAnswerCreateManyAndReturnArgs>(args?: SelectSubset<T, UserTaskAnswerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserTaskAnswerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserTaskAnswer.
     * @param {UserTaskAnswerDeleteArgs} args - Arguments to delete one UserTaskAnswer.
     * @example
     * // Delete one UserTaskAnswer
     * const UserTaskAnswer = await prisma.userTaskAnswer.delete({
     *   where: {
     *     // ... filter to delete one UserTaskAnswer
     *   }
     * })
     * 
     */
    delete<T extends UserTaskAnswerDeleteArgs>(args: SelectSubset<T, UserTaskAnswerDeleteArgs<ExtArgs>>): Prisma__UserTaskAnswerClient<$Result.GetResult<Prisma.$UserTaskAnswerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserTaskAnswer.
     * @param {UserTaskAnswerUpdateArgs} args - Arguments to update one UserTaskAnswer.
     * @example
     * // Update one UserTaskAnswer
     * const userTaskAnswer = await prisma.userTaskAnswer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserTaskAnswerUpdateArgs>(args: SelectSubset<T, UserTaskAnswerUpdateArgs<ExtArgs>>): Prisma__UserTaskAnswerClient<$Result.GetResult<Prisma.$UserTaskAnswerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserTaskAnswers.
     * @param {UserTaskAnswerDeleteManyArgs} args - Arguments to filter UserTaskAnswers to delete.
     * @example
     * // Delete a few UserTaskAnswers
     * const { count } = await prisma.userTaskAnswer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserTaskAnswerDeleteManyArgs>(args?: SelectSubset<T, UserTaskAnswerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserTaskAnswers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserTaskAnswerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserTaskAnswers
     * const userTaskAnswer = await prisma.userTaskAnswer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserTaskAnswerUpdateManyArgs>(args: SelectSubset<T, UserTaskAnswerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserTaskAnswers and returns the data updated in the database.
     * @param {UserTaskAnswerUpdateManyAndReturnArgs} args - Arguments to update many UserTaskAnswers.
     * @example
     * // Update many UserTaskAnswers
     * const userTaskAnswer = await prisma.userTaskAnswer.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserTaskAnswers and only return the `id`
     * const userTaskAnswerWithIdOnly = await prisma.userTaskAnswer.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserTaskAnswerUpdateManyAndReturnArgs>(args: SelectSubset<T, UserTaskAnswerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserTaskAnswerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserTaskAnswer.
     * @param {UserTaskAnswerUpsertArgs} args - Arguments to update or create a UserTaskAnswer.
     * @example
     * // Update or create a UserTaskAnswer
     * const userTaskAnswer = await prisma.userTaskAnswer.upsert({
     *   create: {
     *     // ... data to create a UserTaskAnswer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserTaskAnswer we want to update
     *   }
     * })
     */
    upsert<T extends UserTaskAnswerUpsertArgs>(args: SelectSubset<T, UserTaskAnswerUpsertArgs<ExtArgs>>): Prisma__UserTaskAnswerClient<$Result.GetResult<Prisma.$UserTaskAnswerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserTaskAnswers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserTaskAnswerCountArgs} args - Arguments to filter UserTaskAnswers to count.
     * @example
     * // Count the number of UserTaskAnswers
     * const count = await prisma.userTaskAnswer.count({
     *   where: {
     *     // ... the filter for the UserTaskAnswers we want to count
     *   }
     * })
    **/
    count<T extends UserTaskAnswerCountArgs>(
      args?: Subset<T, UserTaskAnswerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserTaskAnswerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserTaskAnswer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserTaskAnswerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserTaskAnswerAggregateArgs>(args: Subset<T, UserTaskAnswerAggregateArgs>): Prisma.PrismaPromise<GetUserTaskAnswerAggregateType<T>>

    /**
     * Group by UserTaskAnswer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserTaskAnswerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserTaskAnswerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserTaskAnswerGroupByArgs['orderBy'] }
        : { orderBy?: UserTaskAnswerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserTaskAnswerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserTaskAnswerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserTaskAnswer model
   */
  readonly fields: UserTaskAnswerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserTaskAnswer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserTaskAnswerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    task<T extends TaskDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TaskDefaultArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserTaskAnswer model
   */
  interface UserTaskAnswerFieldRefs {
    readonly id: FieldRef<"UserTaskAnswer", 'Int'>
    readonly userId: FieldRef<"UserTaskAnswer", 'Int'>
    readonly taskId: FieldRef<"UserTaskAnswer", 'Int'>
    readonly answer: FieldRef<"UserTaskAnswer", 'String'>
    readonly isCorrect: FieldRef<"UserTaskAnswer", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * UserTaskAnswer findUnique
   */
  export type UserTaskAnswerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserTaskAnswer
     */
    select?: UserTaskAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserTaskAnswer
     */
    omit?: UserTaskAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserTaskAnswerInclude<ExtArgs> | null
    /**
     * Filter, which UserTaskAnswer to fetch.
     */
    where: UserTaskAnswerWhereUniqueInput
  }

  /**
   * UserTaskAnswer findUniqueOrThrow
   */
  export type UserTaskAnswerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserTaskAnswer
     */
    select?: UserTaskAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserTaskAnswer
     */
    omit?: UserTaskAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserTaskAnswerInclude<ExtArgs> | null
    /**
     * Filter, which UserTaskAnswer to fetch.
     */
    where: UserTaskAnswerWhereUniqueInput
  }

  /**
   * UserTaskAnswer findFirst
   */
  export type UserTaskAnswerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserTaskAnswer
     */
    select?: UserTaskAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserTaskAnswer
     */
    omit?: UserTaskAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserTaskAnswerInclude<ExtArgs> | null
    /**
     * Filter, which UserTaskAnswer to fetch.
     */
    where?: UserTaskAnswerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserTaskAnswers to fetch.
     */
    orderBy?: UserTaskAnswerOrderByWithRelationInput | UserTaskAnswerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserTaskAnswers.
     */
    cursor?: UserTaskAnswerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserTaskAnswers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserTaskAnswers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserTaskAnswers.
     */
    distinct?: UserTaskAnswerScalarFieldEnum | UserTaskAnswerScalarFieldEnum[]
  }

  /**
   * UserTaskAnswer findFirstOrThrow
   */
  export type UserTaskAnswerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserTaskAnswer
     */
    select?: UserTaskAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserTaskAnswer
     */
    omit?: UserTaskAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserTaskAnswerInclude<ExtArgs> | null
    /**
     * Filter, which UserTaskAnswer to fetch.
     */
    where?: UserTaskAnswerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserTaskAnswers to fetch.
     */
    orderBy?: UserTaskAnswerOrderByWithRelationInput | UserTaskAnswerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserTaskAnswers.
     */
    cursor?: UserTaskAnswerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserTaskAnswers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserTaskAnswers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserTaskAnswers.
     */
    distinct?: UserTaskAnswerScalarFieldEnum | UserTaskAnswerScalarFieldEnum[]
  }

  /**
   * UserTaskAnswer findMany
   */
  export type UserTaskAnswerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserTaskAnswer
     */
    select?: UserTaskAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserTaskAnswer
     */
    omit?: UserTaskAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserTaskAnswerInclude<ExtArgs> | null
    /**
     * Filter, which UserTaskAnswers to fetch.
     */
    where?: UserTaskAnswerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserTaskAnswers to fetch.
     */
    orderBy?: UserTaskAnswerOrderByWithRelationInput | UserTaskAnswerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserTaskAnswers.
     */
    cursor?: UserTaskAnswerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserTaskAnswers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserTaskAnswers.
     */
    skip?: number
    distinct?: UserTaskAnswerScalarFieldEnum | UserTaskAnswerScalarFieldEnum[]
  }

  /**
   * UserTaskAnswer create
   */
  export type UserTaskAnswerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserTaskAnswer
     */
    select?: UserTaskAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserTaskAnswer
     */
    omit?: UserTaskAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserTaskAnswerInclude<ExtArgs> | null
    /**
     * The data needed to create a UserTaskAnswer.
     */
    data: XOR<UserTaskAnswerCreateInput, UserTaskAnswerUncheckedCreateInput>
  }

  /**
   * UserTaskAnswer createMany
   */
  export type UserTaskAnswerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserTaskAnswers.
     */
    data: UserTaskAnswerCreateManyInput | UserTaskAnswerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserTaskAnswer createManyAndReturn
   */
  export type UserTaskAnswerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserTaskAnswer
     */
    select?: UserTaskAnswerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserTaskAnswer
     */
    omit?: UserTaskAnswerOmit<ExtArgs> | null
    /**
     * The data used to create many UserTaskAnswers.
     */
    data: UserTaskAnswerCreateManyInput | UserTaskAnswerCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserTaskAnswerIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserTaskAnswer update
   */
  export type UserTaskAnswerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserTaskAnswer
     */
    select?: UserTaskAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserTaskAnswer
     */
    omit?: UserTaskAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserTaskAnswerInclude<ExtArgs> | null
    /**
     * The data needed to update a UserTaskAnswer.
     */
    data: XOR<UserTaskAnswerUpdateInput, UserTaskAnswerUncheckedUpdateInput>
    /**
     * Choose, which UserTaskAnswer to update.
     */
    where: UserTaskAnswerWhereUniqueInput
  }

  /**
   * UserTaskAnswer updateMany
   */
  export type UserTaskAnswerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserTaskAnswers.
     */
    data: XOR<UserTaskAnswerUpdateManyMutationInput, UserTaskAnswerUncheckedUpdateManyInput>
    /**
     * Filter which UserTaskAnswers to update
     */
    where?: UserTaskAnswerWhereInput
    /**
     * Limit how many UserTaskAnswers to update.
     */
    limit?: number
  }

  /**
   * UserTaskAnswer updateManyAndReturn
   */
  export type UserTaskAnswerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserTaskAnswer
     */
    select?: UserTaskAnswerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserTaskAnswer
     */
    omit?: UserTaskAnswerOmit<ExtArgs> | null
    /**
     * The data used to update UserTaskAnswers.
     */
    data: XOR<UserTaskAnswerUpdateManyMutationInput, UserTaskAnswerUncheckedUpdateManyInput>
    /**
     * Filter which UserTaskAnswers to update
     */
    where?: UserTaskAnswerWhereInput
    /**
     * Limit how many UserTaskAnswers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserTaskAnswerIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserTaskAnswer upsert
   */
  export type UserTaskAnswerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserTaskAnswer
     */
    select?: UserTaskAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserTaskAnswer
     */
    omit?: UserTaskAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserTaskAnswerInclude<ExtArgs> | null
    /**
     * The filter to search for the UserTaskAnswer to update in case it exists.
     */
    where: UserTaskAnswerWhereUniqueInput
    /**
     * In case the UserTaskAnswer found by the `where` argument doesn't exist, create a new UserTaskAnswer with this data.
     */
    create: XOR<UserTaskAnswerCreateInput, UserTaskAnswerUncheckedCreateInput>
    /**
     * In case the UserTaskAnswer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserTaskAnswerUpdateInput, UserTaskAnswerUncheckedUpdateInput>
  }

  /**
   * UserTaskAnswer delete
   */
  export type UserTaskAnswerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserTaskAnswer
     */
    select?: UserTaskAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserTaskAnswer
     */
    omit?: UserTaskAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserTaskAnswerInclude<ExtArgs> | null
    /**
     * Filter which UserTaskAnswer to delete.
     */
    where: UserTaskAnswerWhereUniqueInput
  }

  /**
   * UserTaskAnswer deleteMany
   */
  export type UserTaskAnswerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserTaskAnswers to delete
     */
    where?: UserTaskAnswerWhereInput
    /**
     * Limit how many UserTaskAnswers to delete.
     */
    limit?: number
  }

  /**
   * UserTaskAnswer without action
   */
  export type UserTaskAnswerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserTaskAnswer
     */
    select?: UserTaskAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserTaskAnswer
     */
    omit?: UserTaskAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserTaskAnswerInclude<ExtArgs> | null
  }


  /**
   * Model Achievement
   */

  export type AggregateAchievement = {
    _count: AchievementCountAggregateOutputType | null
    _avg: AchievementAvgAggregateOutputType | null
    _sum: AchievementSumAggregateOutputType | null
    _min: AchievementMinAggregateOutputType | null
    _max: AchievementMaxAggregateOutputType | null
  }

  export type AchievementAvgAggregateOutputType = {
    id: number | null
    conditionValue: number | null
  }

  export type AchievementSumAggregateOutputType = {
    id: number | null
    conditionValue: number | null
  }

  export type AchievementMinAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    iconUrl: string | null
    type: $Enums.AchievementType | null
    conditionValue: number | null
    createdAt: Date | null
  }

  export type AchievementMaxAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    iconUrl: string | null
    type: $Enums.AchievementType | null
    conditionValue: number | null
    createdAt: Date | null
  }

  export type AchievementCountAggregateOutputType = {
    id: number
    title: number
    description: number
    iconUrl: number
    type: number
    conditionValue: number
    createdAt: number
    _all: number
  }


  export type AchievementAvgAggregateInputType = {
    id?: true
    conditionValue?: true
  }

  export type AchievementSumAggregateInputType = {
    id?: true
    conditionValue?: true
  }

  export type AchievementMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    iconUrl?: true
    type?: true
    conditionValue?: true
    createdAt?: true
  }

  export type AchievementMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    iconUrl?: true
    type?: true
    conditionValue?: true
    createdAt?: true
  }

  export type AchievementCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    iconUrl?: true
    type?: true
    conditionValue?: true
    createdAt?: true
    _all?: true
  }

  export type AchievementAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Achievement to aggregate.
     */
    where?: AchievementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Achievements to fetch.
     */
    orderBy?: AchievementOrderByWithRelationInput | AchievementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AchievementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Achievements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Achievements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Achievements
    **/
    _count?: true | AchievementCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AchievementAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AchievementSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AchievementMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AchievementMaxAggregateInputType
  }

  export type GetAchievementAggregateType<T extends AchievementAggregateArgs> = {
        [P in keyof T & keyof AggregateAchievement]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAchievement[P]>
      : GetScalarType<T[P], AggregateAchievement[P]>
  }




  export type AchievementGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AchievementWhereInput
    orderBy?: AchievementOrderByWithAggregationInput | AchievementOrderByWithAggregationInput[]
    by: AchievementScalarFieldEnum[] | AchievementScalarFieldEnum
    having?: AchievementScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AchievementCountAggregateInputType | true
    _avg?: AchievementAvgAggregateInputType
    _sum?: AchievementSumAggregateInputType
    _min?: AchievementMinAggregateInputType
    _max?: AchievementMaxAggregateInputType
  }

  export type AchievementGroupByOutputType = {
    id: number
    title: string
    description: string
    iconUrl: string | null
    type: $Enums.AchievementType | null
    conditionValue: number | null
    createdAt: Date
    _count: AchievementCountAggregateOutputType | null
    _avg: AchievementAvgAggregateOutputType | null
    _sum: AchievementSumAggregateOutputType | null
    _min: AchievementMinAggregateOutputType | null
    _max: AchievementMaxAggregateOutputType | null
  }

  type GetAchievementGroupByPayload<T extends AchievementGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AchievementGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AchievementGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AchievementGroupByOutputType[P]>
            : GetScalarType<T[P], AchievementGroupByOutputType[P]>
        }
      >
    >


  export type AchievementSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    iconUrl?: boolean
    type?: boolean
    conditionValue?: boolean
    createdAt?: boolean
    users?: boolean | Achievement$usersArgs<ExtArgs>
    _count?: boolean | AchievementCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["achievement"]>

  export type AchievementSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    iconUrl?: boolean
    type?: boolean
    conditionValue?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["achievement"]>

  export type AchievementSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    iconUrl?: boolean
    type?: boolean
    conditionValue?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["achievement"]>

  export type AchievementSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    iconUrl?: boolean
    type?: boolean
    conditionValue?: boolean
    createdAt?: boolean
  }

  export type AchievementOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "iconUrl" | "type" | "conditionValue" | "createdAt", ExtArgs["result"]["achievement"]>
  export type AchievementInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | Achievement$usersArgs<ExtArgs>
    _count?: boolean | AchievementCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AchievementIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type AchievementIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $AchievementPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Achievement"
    objects: {
      users: Prisma.$UserAchievementPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      description: string
      iconUrl: string | null
      type: $Enums.AchievementType | null
      conditionValue: number | null
      createdAt: Date
    }, ExtArgs["result"]["achievement"]>
    composites: {}
  }

  type AchievementGetPayload<S extends boolean | null | undefined | AchievementDefaultArgs> = $Result.GetResult<Prisma.$AchievementPayload, S>

  type AchievementCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AchievementFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AchievementCountAggregateInputType | true
    }

  export interface AchievementDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Achievement'], meta: { name: 'Achievement' } }
    /**
     * Find zero or one Achievement that matches the filter.
     * @param {AchievementFindUniqueArgs} args - Arguments to find a Achievement
     * @example
     * // Get one Achievement
     * const achievement = await prisma.achievement.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AchievementFindUniqueArgs>(args: SelectSubset<T, AchievementFindUniqueArgs<ExtArgs>>): Prisma__AchievementClient<$Result.GetResult<Prisma.$AchievementPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Achievement that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AchievementFindUniqueOrThrowArgs} args - Arguments to find a Achievement
     * @example
     * // Get one Achievement
     * const achievement = await prisma.achievement.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AchievementFindUniqueOrThrowArgs>(args: SelectSubset<T, AchievementFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AchievementClient<$Result.GetResult<Prisma.$AchievementPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Achievement that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AchievementFindFirstArgs} args - Arguments to find a Achievement
     * @example
     * // Get one Achievement
     * const achievement = await prisma.achievement.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AchievementFindFirstArgs>(args?: SelectSubset<T, AchievementFindFirstArgs<ExtArgs>>): Prisma__AchievementClient<$Result.GetResult<Prisma.$AchievementPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Achievement that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AchievementFindFirstOrThrowArgs} args - Arguments to find a Achievement
     * @example
     * // Get one Achievement
     * const achievement = await prisma.achievement.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AchievementFindFirstOrThrowArgs>(args?: SelectSubset<T, AchievementFindFirstOrThrowArgs<ExtArgs>>): Prisma__AchievementClient<$Result.GetResult<Prisma.$AchievementPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Achievements that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AchievementFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Achievements
     * const achievements = await prisma.achievement.findMany()
     * 
     * // Get first 10 Achievements
     * const achievements = await prisma.achievement.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const achievementWithIdOnly = await prisma.achievement.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AchievementFindManyArgs>(args?: SelectSubset<T, AchievementFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AchievementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Achievement.
     * @param {AchievementCreateArgs} args - Arguments to create a Achievement.
     * @example
     * // Create one Achievement
     * const Achievement = await prisma.achievement.create({
     *   data: {
     *     // ... data to create a Achievement
     *   }
     * })
     * 
     */
    create<T extends AchievementCreateArgs>(args: SelectSubset<T, AchievementCreateArgs<ExtArgs>>): Prisma__AchievementClient<$Result.GetResult<Prisma.$AchievementPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Achievements.
     * @param {AchievementCreateManyArgs} args - Arguments to create many Achievements.
     * @example
     * // Create many Achievements
     * const achievement = await prisma.achievement.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AchievementCreateManyArgs>(args?: SelectSubset<T, AchievementCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Achievements and returns the data saved in the database.
     * @param {AchievementCreateManyAndReturnArgs} args - Arguments to create many Achievements.
     * @example
     * // Create many Achievements
     * const achievement = await prisma.achievement.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Achievements and only return the `id`
     * const achievementWithIdOnly = await prisma.achievement.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AchievementCreateManyAndReturnArgs>(args?: SelectSubset<T, AchievementCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AchievementPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Achievement.
     * @param {AchievementDeleteArgs} args - Arguments to delete one Achievement.
     * @example
     * // Delete one Achievement
     * const Achievement = await prisma.achievement.delete({
     *   where: {
     *     // ... filter to delete one Achievement
     *   }
     * })
     * 
     */
    delete<T extends AchievementDeleteArgs>(args: SelectSubset<T, AchievementDeleteArgs<ExtArgs>>): Prisma__AchievementClient<$Result.GetResult<Prisma.$AchievementPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Achievement.
     * @param {AchievementUpdateArgs} args - Arguments to update one Achievement.
     * @example
     * // Update one Achievement
     * const achievement = await prisma.achievement.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AchievementUpdateArgs>(args: SelectSubset<T, AchievementUpdateArgs<ExtArgs>>): Prisma__AchievementClient<$Result.GetResult<Prisma.$AchievementPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Achievements.
     * @param {AchievementDeleteManyArgs} args - Arguments to filter Achievements to delete.
     * @example
     * // Delete a few Achievements
     * const { count } = await prisma.achievement.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AchievementDeleteManyArgs>(args?: SelectSubset<T, AchievementDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Achievements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AchievementUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Achievements
     * const achievement = await prisma.achievement.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AchievementUpdateManyArgs>(args: SelectSubset<T, AchievementUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Achievements and returns the data updated in the database.
     * @param {AchievementUpdateManyAndReturnArgs} args - Arguments to update many Achievements.
     * @example
     * // Update many Achievements
     * const achievement = await prisma.achievement.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Achievements and only return the `id`
     * const achievementWithIdOnly = await prisma.achievement.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AchievementUpdateManyAndReturnArgs>(args: SelectSubset<T, AchievementUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AchievementPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Achievement.
     * @param {AchievementUpsertArgs} args - Arguments to update or create a Achievement.
     * @example
     * // Update or create a Achievement
     * const achievement = await prisma.achievement.upsert({
     *   create: {
     *     // ... data to create a Achievement
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Achievement we want to update
     *   }
     * })
     */
    upsert<T extends AchievementUpsertArgs>(args: SelectSubset<T, AchievementUpsertArgs<ExtArgs>>): Prisma__AchievementClient<$Result.GetResult<Prisma.$AchievementPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Achievements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AchievementCountArgs} args - Arguments to filter Achievements to count.
     * @example
     * // Count the number of Achievements
     * const count = await prisma.achievement.count({
     *   where: {
     *     // ... the filter for the Achievements we want to count
     *   }
     * })
    **/
    count<T extends AchievementCountArgs>(
      args?: Subset<T, AchievementCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AchievementCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Achievement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AchievementAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AchievementAggregateArgs>(args: Subset<T, AchievementAggregateArgs>): Prisma.PrismaPromise<GetAchievementAggregateType<T>>

    /**
     * Group by Achievement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AchievementGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AchievementGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AchievementGroupByArgs['orderBy'] }
        : { orderBy?: AchievementGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AchievementGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAchievementGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Achievement model
   */
  readonly fields: AchievementFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Achievement.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AchievementClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends Achievement$usersArgs<ExtArgs> = {}>(args?: Subset<T, Achievement$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserAchievementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Achievement model
   */
  interface AchievementFieldRefs {
    readonly id: FieldRef<"Achievement", 'Int'>
    readonly title: FieldRef<"Achievement", 'String'>
    readonly description: FieldRef<"Achievement", 'String'>
    readonly iconUrl: FieldRef<"Achievement", 'String'>
    readonly type: FieldRef<"Achievement", 'AchievementType'>
    readonly conditionValue: FieldRef<"Achievement", 'Int'>
    readonly createdAt: FieldRef<"Achievement", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Achievement findUnique
   */
  export type AchievementFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Achievement
     */
    select?: AchievementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Achievement
     */
    omit?: AchievementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AchievementInclude<ExtArgs> | null
    /**
     * Filter, which Achievement to fetch.
     */
    where: AchievementWhereUniqueInput
  }

  /**
   * Achievement findUniqueOrThrow
   */
  export type AchievementFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Achievement
     */
    select?: AchievementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Achievement
     */
    omit?: AchievementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AchievementInclude<ExtArgs> | null
    /**
     * Filter, which Achievement to fetch.
     */
    where: AchievementWhereUniqueInput
  }

  /**
   * Achievement findFirst
   */
  export type AchievementFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Achievement
     */
    select?: AchievementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Achievement
     */
    omit?: AchievementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AchievementInclude<ExtArgs> | null
    /**
     * Filter, which Achievement to fetch.
     */
    where?: AchievementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Achievements to fetch.
     */
    orderBy?: AchievementOrderByWithRelationInput | AchievementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Achievements.
     */
    cursor?: AchievementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Achievements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Achievements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Achievements.
     */
    distinct?: AchievementScalarFieldEnum | AchievementScalarFieldEnum[]
  }

  /**
   * Achievement findFirstOrThrow
   */
  export type AchievementFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Achievement
     */
    select?: AchievementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Achievement
     */
    omit?: AchievementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AchievementInclude<ExtArgs> | null
    /**
     * Filter, which Achievement to fetch.
     */
    where?: AchievementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Achievements to fetch.
     */
    orderBy?: AchievementOrderByWithRelationInput | AchievementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Achievements.
     */
    cursor?: AchievementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Achievements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Achievements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Achievements.
     */
    distinct?: AchievementScalarFieldEnum | AchievementScalarFieldEnum[]
  }

  /**
   * Achievement findMany
   */
  export type AchievementFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Achievement
     */
    select?: AchievementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Achievement
     */
    omit?: AchievementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AchievementInclude<ExtArgs> | null
    /**
     * Filter, which Achievements to fetch.
     */
    where?: AchievementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Achievements to fetch.
     */
    orderBy?: AchievementOrderByWithRelationInput | AchievementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Achievements.
     */
    cursor?: AchievementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Achievements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Achievements.
     */
    skip?: number
    distinct?: AchievementScalarFieldEnum | AchievementScalarFieldEnum[]
  }

  /**
   * Achievement create
   */
  export type AchievementCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Achievement
     */
    select?: AchievementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Achievement
     */
    omit?: AchievementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AchievementInclude<ExtArgs> | null
    /**
     * The data needed to create a Achievement.
     */
    data: XOR<AchievementCreateInput, AchievementUncheckedCreateInput>
  }

  /**
   * Achievement createMany
   */
  export type AchievementCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Achievements.
     */
    data: AchievementCreateManyInput | AchievementCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Achievement createManyAndReturn
   */
  export type AchievementCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Achievement
     */
    select?: AchievementSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Achievement
     */
    omit?: AchievementOmit<ExtArgs> | null
    /**
     * The data used to create many Achievements.
     */
    data: AchievementCreateManyInput | AchievementCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Achievement update
   */
  export type AchievementUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Achievement
     */
    select?: AchievementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Achievement
     */
    omit?: AchievementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AchievementInclude<ExtArgs> | null
    /**
     * The data needed to update a Achievement.
     */
    data: XOR<AchievementUpdateInput, AchievementUncheckedUpdateInput>
    /**
     * Choose, which Achievement to update.
     */
    where: AchievementWhereUniqueInput
  }

  /**
   * Achievement updateMany
   */
  export type AchievementUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Achievements.
     */
    data: XOR<AchievementUpdateManyMutationInput, AchievementUncheckedUpdateManyInput>
    /**
     * Filter which Achievements to update
     */
    where?: AchievementWhereInput
    /**
     * Limit how many Achievements to update.
     */
    limit?: number
  }

  /**
   * Achievement updateManyAndReturn
   */
  export type AchievementUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Achievement
     */
    select?: AchievementSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Achievement
     */
    omit?: AchievementOmit<ExtArgs> | null
    /**
     * The data used to update Achievements.
     */
    data: XOR<AchievementUpdateManyMutationInput, AchievementUncheckedUpdateManyInput>
    /**
     * Filter which Achievements to update
     */
    where?: AchievementWhereInput
    /**
     * Limit how many Achievements to update.
     */
    limit?: number
  }

  /**
   * Achievement upsert
   */
  export type AchievementUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Achievement
     */
    select?: AchievementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Achievement
     */
    omit?: AchievementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AchievementInclude<ExtArgs> | null
    /**
     * The filter to search for the Achievement to update in case it exists.
     */
    where: AchievementWhereUniqueInput
    /**
     * In case the Achievement found by the `where` argument doesn't exist, create a new Achievement with this data.
     */
    create: XOR<AchievementCreateInput, AchievementUncheckedCreateInput>
    /**
     * In case the Achievement was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AchievementUpdateInput, AchievementUncheckedUpdateInput>
  }

  /**
   * Achievement delete
   */
  export type AchievementDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Achievement
     */
    select?: AchievementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Achievement
     */
    omit?: AchievementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AchievementInclude<ExtArgs> | null
    /**
     * Filter which Achievement to delete.
     */
    where: AchievementWhereUniqueInput
  }

  /**
   * Achievement deleteMany
   */
  export type AchievementDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Achievements to delete
     */
    where?: AchievementWhereInput
    /**
     * Limit how many Achievements to delete.
     */
    limit?: number
  }

  /**
   * Achievement.users
   */
  export type Achievement$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAchievement
     */
    select?: UserAchievementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAchievement
     */
    omit?: UserAchievementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAchievementInclude<ExtArgs> | null
    where?: UserAchievementWhereInput
    orderBy?: UserAchievementOrderByWithRelationInput | UserAchievementOrderByWithRelationInput[]
    cursor?: UserAchievementWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserAchievementScalarFieldEnum | UserAchievementScalarFieldEnum[]
  }

  /**
   * Achievement without action
   */
  export type AchievementDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Achievement
     */
    select?: AchievementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Achievement
     */
    omit?: AchievementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AchievementInclude<ExtArgs> | null
  }


  /**
   * Model UserAchievement
   */

  export type AggregateUserAchievement = {
    _count: UserAchievementCountAggregateOutputType | null
    _avg: UserAchievementAvgAggregateOutputType | null
    _sum: UserAchievementSumAggregateOutputType | null
    _min: UserAchievementMinAggregateOutputType | null
    _max: UserAchievementMaxAggregateOutputType | null
  }

  export type UserAchievementAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    achievementId: number | null
  }

  export type UserAchievementSumAggregateOutputType = {
    id: number | null
    userId: number | null
    achievementId: number | null
  }

  export type UserAchievementMinAggregateOutputType = {
    id: number | null
    userId: number | null
    achievementId: number | null
    receivedAt: Date | null
  }

  export type UserAchievementMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    achievementId: number | null
    receivedAt: Date | null
  }

  export type UserAchievementCountAggregateOutputType = {
    id: number
    userId: number
    achievementId: number
    receivedAt: number
    _all: number
  }


  export type UserAchievementAvgAggregateInputType = {
    id?: true
    userId?: true
    achievementId?: true
  }

  export type UserAchievementSumAggregateInputType = {
    id?: true
    userId?: true
    achievementId?: true
  }

  export type UserAchievementMinAggregateInputType = {
    id?: true
    userId?: true
    achievementId?: true
    receivedAt?: true
  }

  export type UserAchievementMaxAggregateInputType = {
    id?: true
    userId?: true
    achievementId?: true
    receivedAt?: true
  }

  export type UserAchievementCountAggregateInputType = {
    id?: true
    userId?: true
    achievementId?: true
    receivedAt?: true
    _all?: true
  }

  export type UserAchievementAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserAchievement to aggregate.
     */
    where?: UserAchievementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserAchievements to fetch.
     */
    orderBy?: UserAchievementOrderByWithRelationInput | UserAchievementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserAchievementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserAchievements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserAchievements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserAchievements
    **/
    _count?: true | UserAchievementCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAchievementAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserAchievementSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserAchievementMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserAchievementMaxAggregateInputType
  }

  export type GetUserAchievementAggregateType<T extends UserAchievementAggregateArgs> = {
        [P in keyof T & keyof AggregateUserAchievement]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserAchievement[P]>
      : GetScalarType<T[P], AggregateUserAchievement[P]>
  }




  export type UserAchievementGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserAchievementWhereInput
    orderBy?: UserAchievementOrderByWithAggregationInput | UserAchievementOrderByWithAggregationInput[]
    by: UserAchievementScalarFieldEnum[] | UserAchievementScalarFieldEnum
    having?: UserAchievementScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserAchievementCountAggregateInputType | true
    _avg?: UserAchievementAvgAggregateInputType
    _sum?: UserAchievementSumAggregateInputType
    _min?: UserAchievementMinAggregateInputType
    _max?: UserAchievementMaxAggregateInputType
  }

  export type UserAchievementGroupByOutputType = {
    id: number
    userId: number
    achievementId: number
    receivedAt: Date
    _count: UserAchievementCountAggregateOutputType | null
    _avg: UserAchievementAvgAggregateOutputType | null
    _sum: UserAchievementSumAggregateOutputType | null
    _min: UserAchievementMinAggregateOutputType | null
    _max: UserAchievementMaxAggregateOutputType | null
  }

  type GetUserAchievementGroupByPayload<T extends UserAchievementGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserAchievementGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserAchievementGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserAchievementGroupByOutputType[P]>
            : GetScalarType<T[P], UserAchievementGroupByOutputType[P]>
        }
      >
    >


  export type UserAchievementSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    achievementId?: boolean
    receivedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    achievement?: boolean | AchievementDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userAchievement"]>

  export type UserAchievementSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    achievementId?: boolean
    receivedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    achievement?: boolean | AchievementDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userAchievement"]>

  export type UserAchievementSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    achievementId?: boolean
    receivedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    achievement?: boolean | AchievementDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userAchievement"]>

  export type UserAchievementSelectScalar = {
    id?: boolean
    userId?: boolean
    achievementId?: boolean
    receivedAt?: boolean
  }

  export type UserAchievementOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "achievementId" | "receivedAt", ExtArgs["result"]["userAchievement"]>
  export type UserAchievementInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    achievement?: boolean | AchievementDefaultArgs<ExtArgs>
  }
  export type UserAchievementIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    achievement?: boolean | AchievementDefaultArgs<ExtArgs>
  }
  export type UserAchievementIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    achievement?: boolean | AchievementDefaultArgs<ExtArgs>
  }

  export type $UserAchievementPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserAchievement"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      achievement: Prisma.$AchievementPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      achievementId: number
      receivedAt: Date
    }, ExtArgs["result"]["userAchievement"]>
    composites: {}
  }

  type UserAchievementGetPayload<S extends boolean | null | undefined | UserAchievementDefaultArgs> = $Result.GetResult<Prisma.$UserAchievementPayload, S>

  type UserAchievementCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserAchievementFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserAchievementCountAggregateInputType | true
    }

  export interface UserAchievementDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserAchievement'], meta: { name: 'UserAchievement' } }
    /**
     * Find zero or one UserAchievement that matches the filter.
     * @param {UserAchievementFindUniqueArgs} args - Arguments to find a UserAchievement
     * @example
     * // Get one UserAchievement
     * const userAchievement = await prisma.userAchievement.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserAchievementFindUniqueArgs>(args: SelectSubset<T, UserAchievementFindUniqueArgs<ExtArgs>>): Prisma__UserAchievementClient<$Result.GetResult<Prisma.$UserAchievementPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserAchievement that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserAchievementFindUniqueOrThrowArgs} args - Arguments to find a UserAchievement
     * @example
     * // Get one UserAchievement
     * const userAchievement = await prisma.userAchievement.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserAchievementFindUniqueOrThrowArgs>(args: SelectSubset<T, UserAchievementFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserAchievementClient<$Result.GetResult<Prisma.$UserAchievementPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserAchievement that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAchievementFindFirstArgs} args - Arguments to find a UserAchievement
     * @example
     * // Get one UserAchievement
     * const userAchievement = await prisma.userAchievement.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserAchievementFindFirstArgs>(args?: SelectSubset<T, UserAchievementFindFirstArgs<ExtArgs>>): Prisma__UserAchievementClient<$Result.GetResult<Prisma.$UserAchievementPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserAchievement that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAchievementFindFirstOrThrowArgs} args - Arguments to find a UserAchievement
     * @example
     * // Get one UserAchievement
     * const userAchievement = await prisma.userAchievement.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserAchievementFindFirstOrThrowArgs>(args?: SelectSubset<T, UserAchievementFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserAchievementClient<$Result.GetResult<Prisma.$UserAchievementPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserAchievements that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAchievementFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserAchievements
     * const userAchievements = await prisma.userAchievement.findMany()
     * 
     * // Get first 10 UserAchievements
     * const userAchievements = await prisma.userAchievement.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userAchievementWithIdOnly = await prisma.userAchievement.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserAchievementFindManyArgs>(args?: SelectSubset<T, UserAchievementFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserAchievementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserAchievement.
     * @param {UserAchievementCreateArgs} args - Arguments to create a UserAchievement.
     * @example
     * // Create one UserAchievement
     * const UserAchievement = await prisma.userAchievement.create({
     *   data: {
     *     // ... data to create a UserAchievement
     *   }
     * })
     * 
     */
    create<T extends UserAchievementCreateArgs>(args: SelectSubset<T, UserAchievementCreateArgs<ExtArgs>>): Prisma__UserAchievementClient<$Result.GetResult<Prisma.$UserAchievementPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserAchievements.
     * @param {UserAchievementCreateManyArgs} args - Arguments to create many UserAchievements.
     * @example
     * // Create many UserAchievements
     * const userAchievement = await prisma.userAchievement.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserAchievementCreateManyArgs>(args?: SelectSubset<T, UserAchievementCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserAchievements and returns the data saved in the database.
     * @param {UserAchievementCreateManyAndReturnArgs} args - Arguments to create many UserAchievements.
     * @example
     * // Create many UserAchievements
     * const userAchievement = await prisma.userAchievement.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserAchievements and only return the `id`
     * const userAchievementWithIdOnly = await prisma.userAchievement.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserAchievementCreateManyAndReturnArgs>(args?: SelectSubset<T, UserAchievementCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserAchievementPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserAchievement.
     * @param {UserAchievementDeleteArgs} args - Arguments to delete one UserAchievement.
     * @example
     * // Delete one UserAchievement
     * const UserAchievement = await prisma.userAchievement.delete({
     *   where: {
     *     // ... filter to delete one UserAchievement
     *   }
     * })
     * 
     */
    delete<T extends UserAchievementDeleteArgs>(args: SelectSubset<T, UserAchievementDeleteArgs<ExtArgs>>): Prisma__UserAchievementClient<$Result.GetResult<Prisma.$UserAchievementPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserAchievement.
     * @param {UserAchievementUpdateArgs} args - Arguments to update one UserAchievement.
     * @example
     * // Update one UserAchievement
     * const userAchievement = await prisma.userAchievement.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserAchievementUpdateArgs>(args: SelectSubset<T, UserAchievementUpdateArgs<ExtArgs>>): Prisma__UserAchievementClient<$Result.GetResult<Prisma.$UserAchievementPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserAchievements.
     * @param {UserAchievementDeleteManyArgs} args - Arguments to filter UserAchievements to delete.
     * @example
     * // Delete a few UserAchievements
     * const { count } = await prisma.userAchievement.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserAchievementDeleteManyArgs>(args?: SelectSubset<T, UserAchievementDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserAchievements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAchievementUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserAchievements
     * const userAchievement = await prisma.userAchievement.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserAchievementUpdateManyArgs>(args: SelectSubset<T, UserAchievementUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserAchievements and returns the data updated in the database.
     * @param {UserAchievementUpdateManyAndReturnArgs} args - Arguments to update many UserAchievements.
     * @example
     * // Update many UserAchievements
     * const userAchievement = await prisma.userAchievement.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserAchievements and only return the `id`
     * const userAchievementWithIdOnly = await prisma.userAchievement.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserAchievementUpdateManyAndReturnArgs>(args: SelectSubset<T, UserAchievementUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserAchievementPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserAchievement.
     * @param {UserAchievementUpsertArgs} args - Arguments to update or create a UserAchievement.
     * @example
     * // Update or create a UserAchievement
     * const userAchievement = await prisma.userAchievement.upsert({
     *   create: {
     *     // ... data to create a UserAchievement
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserAchievement we want to update
     *   }
     * })
     */
    upsert<T extends UserAchievementUpsertArgs>(args: SelectSubset<T, UserAchievementUpsertArgs<ExtArgs>>): Prisma__UserAchievementClient<$Result.GetResult<Prisma.$UserAchievementPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserAchievements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAchievementCountArgs} args - Arguments to filter UserAchievements to count.
     * @example
     * // Count the number of UserAchievements
     * const count = await prisma.userAchievement.count({
     *   where: {
     *     // ... the filter for the UserAchievements we want to count
     *   }
     * })
    **/
    count<T extends UserAchievementCountArgs>(
      args?: Subset<T, UserAchievementCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserAchievementCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserAchievement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAchievementAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAchievementAggregateArgs>(args: Subset<T, UserAchievementAggregateArgs>): Prisma.PrismaPromise<GetUserAchievementAggregateType<T>>

    /**
     * Group by UserAchievement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAchievementGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserAchievementGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserAchievementGroupByArgs['orderBy'] }
        : { orderBy?: UserAchievementGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserAchievementGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserAchievementGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserAchievement model
   */
  readonly fields: UserAchievementFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserAchievement.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserAchievementClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    achievement<T extends AchievementDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AchievementDefaultArgs<ExtArgs>>): Prisma__AchievementClient<$Result.GetResult<Prisma.$AchievementPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserAchievement model
   */
  interface UserAchievementFieldRefs {
    readonly id: FieldRef<"UserAchievement", 'Int'>
    readonly userId: FieldRef<"UserAchievement", 'Int'>
    readonly achievementId: FieldRef<"UserAchievement", 'Int'>
    readonly receivedAt: FieldRef<"UserAchievement", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserAchievement findUnique
   */
  export type UserAchievementFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAchievement
     */
    select?: UserAchievementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAchievement
     */
    omit?: UserAchievementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAchievementInclude<ExtArgs> | null
    /**
     * Filter, which UserAchievement to fetch.
     */
    where: UserAchievementWhereUniqueInput
  }

  /**
   * UserAchievement findUniqueOrThrow
   */
  export type UserAchievementFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAchievement
     */
    select?: UserAchievementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAchievement
     */
    omit?: UserAchievementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAchievementInclude<ExtArgs> | null
    /**
     * Filter, which UserAchievement to fetch.
     */
    where: UserAchievementWhereUniqueInput
  }

  /**
   * UserAchievement findFirst
   */
  export type UserAchievementFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAchievement
     */
    select?: UserAchievementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAchievement
     */
    omit?: UserAchievementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAchievementInclude<ExtArgs> | null
    /**
     * Filter, which UserAchievement to fetch.
     */
    where?: UserAchievementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserAchievements to fetch.
     */
    orderBy?: UserAchievementOrderByWithRelationInput | UserAchievementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserAchievements.
     */
    cursor?: UserAchievementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserAchievements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserAchievements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserAchievements.
     */
    distinct?: UserAchievementScalarFieldEnum | UserAchievementScalarFieldEnum[]
  }

  /**
   * UserAchievement findFirstOrThrow
   */
  export type UserAchievementFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAchievement
     */
    select?: UserAchievementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAchievement
     */
    omit?: UserAchievementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAchievementInclude<ExtArgs> | null
    /**
     * Filter, which UserAchievement to fetch.
     */
    where?: UserAchievementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserAchievements to fetch.
     */
    orderBy?: UserAchievementOrderByWithRelationInput | UserAchievementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserAchievements.
     */
    cursor?: UserAchievementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserAchievements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserAchievements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserAchievements.
     */
    distinct?: UserAchievementScalarFieldEnum | UserAchievementScalarFieldEnum[]
  }

  /**
   * UserAchievement findMany
   */
  export type UserAchievementFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAchievement
     */
    select?: UserAchievementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAchievement
     */
    omit?: UserAchievementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAchievementInclude<ExtArgs> | null
    /**
     * Filter, which UserAchievements to fetch.
     */
    where?: UserAchievementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserAchievements to fetch.
     */
    orderBy?: UserAchievementOrderByWithRelationInput | UserAchievementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserAchievements.
     */
    cursor?: UserAchievementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserAchievements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserAchievements.
     */
    skip?: number
    distinct?: UserAchievementScalarFieldEnum | UserAchievementScalarFieldEnum[]
  }

  /**
   * UserAchievement create
   */
  export type UserAchievementCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAchievement
     */
    select?: UserAchievementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAchievement
     */
    omit?: UserAchievementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAchievementInclude<ExtArgs> | null
    /**
     * The data needed to create a UserAchievement.
     */
    data: XOR<UserAchievementCreateInput, UserAchievementUncheckedCreateInput>
  }

  /**
   * UserAchievement createMany
   */
  export type UserAchievementCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserAchievements.
     */
    data: UserAchievementCreateManyInput | UserAchievementCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserAchievement createManyAndReturn
   */
  export type UserAchievementCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAchievement
     */
    select?: UserAchievementSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserAchievement
     */
    omit?: UserAchievementOmit<ExtArgs> | null
    /**
     * The data used to create many UserAchievements.
     */
    data: UserAchievementCreateManyInput | UserAchievementCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAchievementIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserAchievement update
   */
  export type UserAchievementUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAchievement
     */
    select?: UserAchievementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAchievement
     */
    omit?: UserAchievementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAchievementInclude<ExtArgs> | null
    /**
     * The data needed to update a UserAchievement.
     */
    data: XOR<UserAchievementUpdateInput, UserAchievementUncheckedUpdateInput>
    /**
     * Choose, which UserAchievement to update.
     */
    where: UserAchievementWhereUniqueInput
  }

  /**
   * UserAchievement updateMany
   */
  export type UserAchievementUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserAchievements.
     */
    data: XOR<UserAchievementUpdateManyMutationInput, UserAchievementUncheckedUpdateManyInput>
    /**
     * Filter which UserAchievements to update
     */
    where?: UserAchievementWhereInput
    /**
     * Limit how many UserAchievements to update.
     */
    limit?: number
  }

  /**
   * UserAchievement updateManyAndReturn
   */
  export type UserAchievementUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAchievement
     */
    select?: UserAchievementSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserAchievement
     */
    omit?: UserAchievementOmit<ExtArgs> | null
    /**
     * The data used to update UserAchievements.
     */
    data: XOR<UserAchievementUpdateManyMutationInput, UserAchievementUncheckedUpdateManyInput>
    /**
     * Filter which UserAchievements to update
     */
    where?: UserAchievementWhereInput
    /**
     * Limit how many UserAchievements to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAchievementIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserAchievement upsert
   */
  export type UserAchievementUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAchievement
     */
    select?: UserAchievementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAchievement
     */
    omit?: UserAchievementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAchievementInclude<ExtArgs> | null
    /**
     * The filter to search for the UserAchievement to update in case it exists.
     */
    where: UserAchievementWhereUniqueInput
    /**
     * In case the UserAchievement found by the `where` argument doesn't exist, create a new UserAchievement with this data.
     */
    create: XOR<UserAchievementCreateInput, UserAchievementUncheckedCreateInput>
    /**
     * In case the UserAchievement was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserAchievementUpdateInput, UserAchievementUncheckedUpdateInput>
  }

  /**
   * UserAchievement delete
   */
  export type UserAchievementDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAchievement
     */
    select?: UserAchievementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAchievement
     */
    omit?: UserAchievementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAchievementInclude<ExtArgs> | null
    /**
     * Filter which UserAchievement to delete.
     */
    where: UserAchievementWhereUniqueInput
  }

  /**
   * UserAchievement deleteMany
   */
  export type UserAchievementDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserAchievements to delete
     */
    where?: UserAchievementWhereInput
    /**
     * Limit how many UserAchievements to delete.
     */
    limit?: number
  }

  /**
   * UserAchievement without action
   */
  export type UserAchievementDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAchievement
     */
    select?: UserAchievementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAchievement
     */
    omit?: UserAchievementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAchievementInclude<ExtArgs> | null
  }


  /**
   * Model WordStatistic
   */

  export type AggregateWordStatistic = {
    _count: WordStatisticCountAggregateOutputType | null
    _avg: WordStatisticAvgAggregateOutputType | null
    _sum: WordStatisticSumAggregateOutputType | null
    _min: WordStatisticMinAggregateOutputType | null
    _max: WordStatisticMaxAggregateOutputType | null
  }

  export type WordStatisticAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type WordStatisticSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type WordStatisticMinAggregateOutputType = {
    id: number | null
    word: string | null
    learnedAt: Date | null
    userId: number | null
  }

  export type WordStatisticMaxAggregateOutputType = {
    id: number | null
    word: string | null
    learnedAt: Date | null
    userId: number | null
  }

  export type WordStatisticCountAggregateOutputType = {
    id: number
    word: number
    learnedAt: number
    userId: number
    _all: number
  }


  export type WordStatisticAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type WordStatisticSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type WordStatisticMinAggregateInputType = {
    id?: true
    word?: true
    learnedAt?: true
    userId?: true
  }

  export type WordStatisticMaxAggregateInputType = {
    id?: true
    word?: true
    learnedAt?: true
    userId?: true
  }

  export type WordStatisticCountAggregateInputType = {
    id?: true
    word?: true
    learnedAt?: true
    userId?: true
    _all?: true
  }

  export type WordStatisticAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WordStatistic to aggregate.
     */
    where?: WordStatisticWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WordStatistics to fetch.
     */
    orderBy?: WordStatisticOrderByWithRelationInput | WordStatisticOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WordStatisticWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WordStatistics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WordStatistics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WordStatistics
    **/
    _count?: true | WordStatisticCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WordStatisticAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WordStatisticSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WordStatisticMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WordStatisticMaxAggregateInputType
  }

  export type GetWordStatisticAggregateType<T extends WordStatisticAggregateArgs> = {
        [P in keyof T & keyof AggregateWordStatistic]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWordStatistic[P]>
      : GetScalarType<T[P], AggregateWordStatistic[P]>
  }




  export type WordStatisticGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WordStatisticWhereInput
    orderBy?: WordStatisticOrderByWithAggregationInput | WordStatisticOrderByWithAggregationInput[]
    by: WordStatisticScalarFieldEnum[] | WordStatisticScalarFieldEnum
    having?: WordStatisticScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WordStatisticCountAggregateInputType | true
    _avg?: WordStatisticAvgAggregateInputType
    _sum?: WordStatisticSumAggregateInputType
    _min?: WordStatisticMinAggregateInputType
    _max?: WordStatisticMaxAggregateInputType
  }

  export type WordStatisticGroupByOutputType = {
    id: number
    word: string
    learnedAt: Date
    userId: number
    _count: WordStatisticCountAggregateOutputType | null
    _avg: WordStatisticAvgAggregateOutputType | null
    _sum: WordStatisticSumAggregateOutputType | null
    _min: WordStatisticMinAggregateOutputType | null
    _max: WordStatisticMaxAggregateOutputType | null
  }

  type GetWordStatisticGroupByPayload<T extends WordStatisticGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WordStatisticGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WordStatisticGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WordStatisticGroupByOutputType[P]>
            : GetScalarType<T[P], WordStatisticGroupByOutputType[P]>
        }
      >
    >


  export type WordStatisticSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    word?: boolean
    learnedAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["wordStatistic"]>

  export type WordStatisticSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    word?: boolean
    learnedAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["wordStatistic"]>

  export type WordStatisticSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    word?: boolean
    learnedAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["wordStatistic"]>

  export type WordStatisticSelectScalar = {
    id?: boolean
    word?: boolean
    learnedAt?: boolean
    userId?: boolean
  }

  export type WordStatisticOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "word" | "learnedAt" | "userId", ExtArgs["result"]["wordStatistic"]>
  export type WordStatisticInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type WordStatisticIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type WordStatisticIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $WordStatisticPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WordStatistic"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      word: string
      learnedAt: Date
      userId: number
    }, ExtArgs["result"]["wordStatistic"]>
    composites: {}
  }

  type WordStatisticGetPayload<S extends boolean | null | undefined | WordStatisticDefaultArgs> = $Result.GetResult<Prisma.$WordStatisticPayload, S>

  type WordStatisticCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WordStatisticFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WordStatisticCountAggregateInputType | true
    }

  export interface WordStatisticDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WordStatistic'], meta: { name: 'WordStatistic' } }
    /**
     * Find zero or one WordStatistic that matches the filter.
     * @param {WordStatisticFindUniqueArgs} args - Arguments to find a WordStatistic
     * @example
     * // Get one WordStatistic
     * const wordStatistic = await prisma.wordStatistic.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WordStatisticFindUniqueArgs>(args: SelectSubset<T, WordStatisticFindUniqueArgs<ExtArgs>>): Prisma__WordStatisticClient<$Result.GetResult<Prisma.$WordStatisticPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one WordStatistic that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WordStatisticFindUniqueOrThrowArgs} args - Arguments to find a WordStatistic
     * @example
     * // Get one WordStatistic
     * const wordStatistic = await prisma.wordStatistic.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WordStatisticFindUniqueOrThrowArgs>(args: SelectSubset<T, WordStatisticFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WordStatisticClient<$Result.GetResult<Prisma.$WordStatisticPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WordStatistic that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WordStatisticFindFirstArgs} args - Arguments to find a WordStatistic
     * @example
     * // Get one WordStatistic
     * const wordStatistic = await prisma.wordStatistic.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WordStatisticFindFirstArgs>(args?: SelectSubset<T, WordStatisticFindFirstArgs<ExtArgs>>): Prisma__WordStatisticClient<$Result.GetResult<Prisma.$WordStatisticPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WordStatistic that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WordStatisticFindFirstOrThrowArgs} args - Arguments to find a WordStatistic
     * @example
     * // Get one WordStatistic
     * const wordStatistic = await prisma.wordStatistic.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WordStatisticFindFirstOrThrowArgs>(args?: SelectSubset<T, WordStatisticFindFirstOrThrowArgs<ExtArgs>>): Prisma__WordStatisticClient<$Result.GetResult<Prisma.$WordStatisticPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more WordStatistics that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WordStatisticFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WordStatistics
     * const wordStatistics = await prisma.wordStatistic.findMany()
     * 
     * // Get first 10 WordStatistics
     * const wordStatistics = await prisma.wordStatistic.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const wordStatisticWithIdOnly = await prisma.wordStatistic.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WordStatisticFindManyArgs>(args?: SelectSubset<T, WordStatisticFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WordStatisticPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a WordStatistic.
     * @param {WordStatisticCreateArgs} args - Arguments to create a WordStatistic.
     * @example
     * // Create one WordStatistic
     * const WordStatistic = await prisma.wordStatistic.create({
     *   data: {
     *     // ... data to create a WordStatistic
     *   }
     * })
     * 
     */
    create<T extends WordStatisticCreateArgs>(args: SelectSubset<T, WordStatisticCreateArgs<ExtArgs>>): Prisma__WordStatisticClient<$Result.GetResult<Prisma.$WordStatisticPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many WordStatistics.
     * @param {WordStatisticCreateManyArgs} args - Arguments to create many WordStatistics.
     * @example
     * // Create many WordStatistics
     * const wordStatistic = await prisma.wordStatistic.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WordStatisticCreateManyArgs>(args?: SelectSubset<T, WordStatisticCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many WordStatistics and returns the data saved in the database.
     * @param {WordStatisticCreateManyAndReturnArgs} args - Arguments to create many WordStatistics.
     * @example
     * // Create many WordStatistics
     * const wordStatistic = await prisma.wordStatistic.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many WordStatistics and only return the `id`
     * const wordStatisticWithIdOnly = await prisma.wordStatistic.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WordStatisticCreateManyAndReturnArgs>(args?: SelectSubset<T, WordStatisticCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WordStatisticPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a WordStatistic.
     * @param {WordStatisticDeleteArgs} args - Arguments to delete one WordStatistic.
     * @example
     * // Delete one WordStatistic
     * const WordStatistic = await prisma.wordStatistic.delete({
     *   where: {
     *     // ... filter to delete one WordStatistic
     *   }
     * })
     * 
     */
    delete<T extends WordStatisticDeleteArgs>(args: SelectSubset<T, WordStatisticDeleteArgs<ExtArgs>>): Prisma__WordStatisticClient<$Result.GetResult<Prisma.$WordStatisticPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one WordStatistic.
     * @param {WordStatisticUpdateArgs} args - Arguments to update one WordStatistic.
     * @example
     * // Update one WordStatistic
     * const wordStatistic = await prisma.wordStatistic.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WordStatisticUpdateArgs>(args: SelectSubset<T, WordStatisticUpdateArgs<ExtArgs>>): Prisma__WordStatisticClient<$Result.GetResult<Prisma.$WordStatisticPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more WordStatistics.
     * @param {WordStatisticDeleteManyArgs} args - Arguments to filter WordStatistics to delete.
     * @example
     * // Delete a few WordStatistics
     * const { count } = await prisma.wordStatistic.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WordStatisticDeleteManyArgs>(args?: SelectSubset<T, WordStatisticDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WordStatistics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WordStatisticUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WordStatistics
     * const wordStatistic = await prisma.wordStatistic.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WordStatisticUpdateManyArgs>(args: SelectSubset<T, WordStatisticUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WordStatistics and returns the data updated in the database.
     * @param {WordStatisticUpdateManyAndReturnArgs} args - Arguments to update many WordStatistics.
     * @example
     * // Update many WordStatistics
     * const wordStatistic = await prisma.wordStatistic.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more WordStatistics and only return the `id`
     * const wordStatisticWithIdOnly = await prisma.wordStatistic.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends WordStatisticUpdateManyAndReturnArgs>(args: SelectSubset<T, WordStatisticUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WordStatisticPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one WordStatistic.
     * @param {WordStatisticUpsertArgs} args - Arguments to update or create a WordStatistic.
     * @example
     * // Update or create a WordStatistic
     * const wordStatistic = await prisma.wordStatistic.upsert({
     *   create: {
     *     // ... data to create a WordStatistic
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WordStatistic we want to update
     *   }
     * })
     */
    upsert<T extends WordStatisticUpsertArgs>(args: SelectSubset<T, WordStatisticUpsertArgs<ExtArgs>>): Prisma__WordStatisticClient<$Result.GetResult<Prisma.$WordStatisticPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of WordStatistics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WordStatisticCountArgs} args - Arguments to filter WordStatistics to count.
     * @example
     * // Count the number of WordStatistics
     * const count = await prisma.wordStatistic.count({
     *   where: {
     *     // ... the filter for the WordStatistics we want to count
     *   }
     * })
    **/
    count<T extends WordStatisticCountArgs>(
      args?: Subset<T, WordStatisticCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WordStatisticCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WordStatistic.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WordStatisticAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WordStatisticAggregateArgs>(args: Subset<T, WordStatisticAggregateArgs>): Prisma.PrismaPromise<GetWordStatisticAggregateType<T>>

    /**
     * Group by WordStatistic.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WordStatisticGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends WordStatisticGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WordStatisticGroupByArgs['orderBy'] }
        : { orderBy?: WordStatisticGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, WordStatisticGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWordStatisticGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WordStatistic model
   */
  readonly fields: WordStatisticFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WordStatistic.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WordStatisticClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the WordStatistic model
   */
  interface WordStatisticFieldRefs {
    readonly id: FieldRef<"WordStatistic", 'Int'>
    readonly word: FieldRef<"WordStatistic", 'String'>
    readonly learnedAt: FieldRef<"WordStatistic", 'DateTime'>
    readonly userId: FieldRef<"WordStatistic", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * WordStatistic findUnique
   */
  export type WordStatisticFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WordStatistic
     */
    select?: WordStatisticSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WordStatistic
     */
    omit?: WordStatisticOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WordStatisticInclude<ExtArgs> | null
    /**
     * Filter, which WordStatistic to fetch.
     */
    where: WordStatisticWhereUniqueInput
  }

  /**
   * WordStatistic findUniqueOrThrow
   */
  export type WordStatisticFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WordStatistic
     */
    select?: WordStatisticSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WordStatistic
     */
    omit?: WordStatisticOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WordStatisticInclude<ExtArgs> | null
    /**
     * Filter, which WordStatistic to fetch.
     */
    where: WordStatisticWhereUniqueInput
  }

  /**
   * WordStatistic findFirst
   */
  export type WordStatisticFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WordStatistic
     */
    select?: WordStatisticSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WordStatistic
     */
    omit?: WordStatisticOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WordStatisticInclude<ExtArgs> | null
    /**
     * Filter, which WordStatistic to fetch.
     */
    where?: WordStatisticWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WordStatistics to fetch.
     */
    orderBy?: WordStatisticOrderByWithRelationInput | WordStatisticOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WordStatistics.
     */
    cursor?: WordStatisticWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WordStatistics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WordStatistics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WordStatistics.
     */
    distinct?: WordStatisticScalarFieldEnum | WordStatisticScalarFieldEnum[]
  }

  /**
   * WordStatistic findFirstOrThrow
   */
  export type WordStatisticFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WordStatistic
     */
    select?: WordStatisticSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WordStatistic
     */
    omit?: WordStatisticOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WordStatisticInclude<ExtArgs> | null
    /**
     * Filter, which WordStatistic to fetch.
     */
    where?: WordStatisticWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WordStatistics to fetch.
     */
    orderBy?: WordStatisticOrderByWithRelationInput | WordStatisticOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WordStatistics.
     */
    cursor?: WordStatisticWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WordStatistics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WordStatistics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WordStatistics.
     */
    distinct?: WordStatisticScalarFieldEnum | WordStatisticScalarFieldEnum[]
  }

  /**
   * WordStatistic findMany
   */
  export type WordStatisticFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WordStatistic
     */
    select?: WordStatisticSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WordStatistic
     */
    omit?: WordStatisticOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WordStatisticInclude<ExtArgs> | null
    /**
     * Filter, which WordStatistics to fetch.
     */
    where?: WordStatisticWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WordStatistics to fetch.
     */
    orderBy?: WordStatisticOrderByWithRelationInput | WordStatisticOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WordStatistics.
     */
    cursor?: WordStatisticWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WordStatistics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WordStatistics.
     */
    skip?: number
    distinct?: WordStatisticScalarFieldEnum | WordStatisticScalarFieldEnum[]
  }

  /**
   * WordStatistic create
   */
  export type WordStatisticCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WordStatistic
     */
    select?: WordStatisticSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WordStatistic
     */
    omit?: WordStatisticOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WordStatisticInclude<ExtArgs> | null
    /**
     * The data needed to create a WordStatistic.
     */
    data: XOR<WordStatisticCreateInput, WordStatisticUncheckedCreateInput>
  }

  /**
   * WordStatistic createMany
   */
  export type WordStatisticCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WordStatistics.
     */
    data: WordStatisticCreateManyInput | WordStatisticCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WordStatistic createManyAndReturn
   */
  export type WordStatisticCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WordStatistic
     */
    select?: WordStatisticSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WordStatistic
     */
    omit?: WordStatisticOmit<ExtArgs> | null
    /**
     * The data used to create many WordStatistics.
     */
    data: WordStatisticCreateManyInput | WordStatisticCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WordStatisticIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * WordStatistic update
   */
  export type WordStatisticUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WordStatistic
     */
    select?: WordStatisticSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WordStatistic
     */
    omit?: WordStatisticOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WordStatisticInclude<ExtArgs> | null
    /**
     * The data needed to update a WordStatistic.
     */
    data: XOR<WordStatisticUpdateInput, WordStatisticUncheckedUpdateInput>
    /**
     * Choose, which WordStatistic to update.
     */
    where: WordStatisticWhereUniqueInput
  }

  /**
   * WordStatistic updateMany
   */
  export type WordStatisticUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WordStatistics.
     */
    data: XOR<WordStatisticUpdateManyMutationInput, WordStatisticUncheckedUpdateManyInput>
    /**
     * Filter which WordStatistics to update
     */
    where?: WordStatisticWhereInput
    /**
     * Limit how many WordStatistics to update.
     */
    limit?: number
  }

  /**
   * WordStatistic updateManyAndReturn
   */
  export type WordStatisticUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WordStatistic
     */
    select?: WordStatisticSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WordStatistic
     */
    omit?: WordStatisticOmit<ExtArgs> | null
    /**
     * The data used to update WordStatistics.
     */
    data: XOR<WordStatisticUpdateManyMutationInput, WordStatisticUncheckedUpdateManyInput>
    /**
     * Filter which WordStatistics to update
     */
    where?: WordStatisticWhereInput
    /**
     * Limit how many WordStatistics to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WordStatisticIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * WordStatistic upsert
   */
  export type WordStatisticUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WordStatistic
     */
    select?: WordStatisticSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WordStatistic
     */
    omit?: WordStatisticOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WordStatisticInclude<ExtArgs> | null
    /**
     * The filter to search for the WordStatistic to update in case it exists.
     */
    where: WordStatisticWhereUniqueInput
    /**
     * In case the WordStatistic found by the `where` argument doesn't exist, create a new WordStatistic with this data.
     */
    create: XOR<WordStatisticCreateInput, WordStatisticUncheckedCreateInput>
    /**
     * In case the WordStatistic was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WordStatisticUpdateInput, WordStatisticUncheckedUpdateInput>
  }

  /**
   * WordStatistic delete
   */
  export type WordStatisticDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WordStatistic
     */
    select?: WordStatisticSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WordStatistic
     */
    omit?: WordStatisticOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WordStatisticInclude<ExtArgs> | null
    /**
     * Filter which WordStatistic to delete.
     */
    where: WordStatisticWhereUniqueInput
  }

  /**
   * WordStatistic deleteMany
   */
  export type WordStatisticDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WordStatistics to delete
     */
    where?: WordStatisticWhereInput
    /**
     * Limit how many WordStatistics to delete.
     */
    limit?: number
  }

  /**
   * WordStatistic without action
   */
  export type WordStatisticDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WordStatistic
     */
    select?: WordStatisticSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WordStatistic
     */
    omit?: WordStatisticOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WordStatisticInclude<ExtArgs> | null
  }


  /**
   * Model DailyActivity
   */

  export type AggregateDailyActivity = {
    _count: DailyActivityCountAggregateOutputType | null
    _avg: DailyActivityAvgAggregateOutputType | null
    _sum: DailyActivitySumAggregateOutputType | null
    _min: DailyActivityMinAggregateOutputType | null
    _max: DailyActivityMaxAggregateOutputType | null
  }

  export type DailyActivityAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type DailyActivitySumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type DailyActivityMinAggregateOutputType = {
    id: number | null
    date: Date | null
    isActive: boolean | null
    userId: number | null
  }

  export type DailyActivityMaxAggregateOutputType = {
    id: number | null
    date: Date | null
    isActive: boolean | null
    userId: number | null
  }

  export type DailyActivityCountAggregateOutputType = {
    id: number
    date: number
    isActive: number
    userId: number
    _all: number
  }


  export type DailyActivityAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type DailyActivitySumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type DailyActivityMinAggregateInputType = {
    id?: true
    date?: true
    isActive?: true
    userId?: true
  }

  export type DailyActivityMaxAggregateInputType = {
    id?: true
    date?: true
    isActive?: true
    userId?: true
  }

  export type DailyActivityCountAggregateInputType = {
    id?: true
    date?: true
    isActive?: true
    userId?: true
    _all?: true
  }

  export type DailyActivityAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DailyActivity to aggregate.
     */
    where?: DailyActivityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DailyActivities to fetch.
     */
    orderBy?: DailyActivityOrderByWithRelationInput | DailyActivityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DailyActivityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DailyActivities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DailyActivities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DailyActivities
    **/
    _count?: true | DailyActivityCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DailyActivityAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DailyActivitySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DailyActivityMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DailyActivityMaxAggregateInputType
  }

  export type GetDailyActivityAggregateType<T extends DailyActivityAggregateArgs> = {
        [P in keyof T & keyof AggregateDailyActivity]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDailyActivity[P]>
      : GetScalarType<T[P], AggregateDailyActivity[P]>
  }




  export type DailyActivityGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DailyActivityWhereInput
    orderBy?: DailyActivityOrderByWithAggregationInput | DailyActivityOrderByWithAggregationInput[]
    by: DailyActivityScalarFieldEnum[] | DailyActivityScalarFieldEnum
    having?: DailyActivityScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DailyActivityCountAggregateInputType | true
    _avg?: DailyActivityAvgAggregateInputType
    _sum?: DailyActivitySumAggregateInputType
    _min?: DailyActivityMinAggregateInputType
    _max?: DailyActivityMaxAggregateInputType
  }

  export type DailyActivityGroupByOutputType = {
    id: number
    date: Date
    isActive: boolean
    userId: number
    _count: DailyActivityCountAggregateOutputType | null
    _avg: DailyActivityAvgAggregateOutputType | null
    _sum: DailyActivitySumAggregateOutputType | null
    _min: DailyActivityMinAggregateOutputType | null
    _max: DailyActivityMaxAggregateOutputType | null
  }

  type GetDailyActivityGroupByPayload<T extends DailyActivityGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DailyActivityGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DailyActivityGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DailyActivityGroupByOutputType[P]>
            : GetScalarType<T[P], DailyActivityGroupByOutputType[P]>
        }
      >
    >


  export type DailyActivitySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    isActive?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dailyActivity"]>

  export type DailyActivitySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    isActive?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dailyActivity"]>

  export type DailyActivitySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    isActive?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dailyActivity"]>

  export type DailyActivitySelectScalar = {
    id?: boolean
    date?: boolean
    isActive?: boolean
    userId?: boolean
  }

  export type DailyActivityOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "date" | "isActive" | "userId", ExtArgs["result"]["dailyActivity"]>
  export type DailyActivityInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type DailyActivityIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type DailyActivityIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $DailyActivityPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DailyActivity"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      date: Date
      isActive: boolean
      userId: number
    }, ExtArgs["result"]["dailyActivity"]>
    composites: {}
  }

  type DailyActivityGetPayload<S extends boolean | null | undefined | DailyActivityDefaultArgs> = $Result.GetResult<Prisma.$DailyActivityPayload, S>

  type DailyActivityCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DailyActivityFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DailyActivityCountAggregateInputType | true
    }

  export interface DailyActivityDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DailyActivity'], meta: { name: 'DailyActivity' } }
    /**
     * Find zero or one DailyActivity that matches the filter.
     * @param {DailyActivityFindUniqueArgs} args - Arguments to find a DailyActivity
     * @example
     * // Get one DailyActivity
     * const dailyActivity = await prisma.dailyActivity.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DailyActivityFindUniqueArgs>(args: SelectSubset<T, DailyActivityFindUniqueArgs<ExtArgs>>): Prisma__DailyActivityClient<$Result.GetResult<Prisma.$DailyActivityPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DailyActivity that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DailyActivityFindUniqueOrThrowArgs} args - Arguments to find a DailyActivity
     * @example
     * // Get one DailyActivity
     * const dailyActivity = await prisma.dailyActivity.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DailyActivityFindUniqueOrThrowArgs>(args: SelectSubset<T, DailyActivityFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DailyActivityClient<$Result.GetResult<Prisma.$DailyActivityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DailyActivity that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyActivityFindFirstArgs} args - Arguments to find a DailyActivity
     * @example
     * // Get one DailyActivity
     * const dailyActivity = await prisma.dailyActivity.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DailyActivityFindFirstArgs>(args?: SelectSubset<T, DailyActivityFindFirstArgs<ExtArgs>>): Prisma__DailyActivityClient<$Result.GetResult<Prisma.$DailyActivityPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DailyActivity that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyActivityFindFirstOrThrowArgs} args - Arguments to find a DailyActivity
     * @example
     * // Get one DailyActivity
     * const dailyActivity = await prisma.dailyActivity.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DailyActivityFindFirstOrThrowArgs>(args?: SelectSubset<T, DailyActivityFindFirstOrThrowArgs<ExtArgs>>): Prisma__DailyActivityClient<$Result.GetResult<Prisma.$DailyActivityPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DailyActivities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyActivityFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DailyActivities
     * const dailyActivities = await prisma.dailyActivity.findMany()
     * 
     * // Get first 10 DailyActivities
     * const dailyActivities = await prisma.dailyActivity.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const dailyActivityWithIdOnly = await prisma.dailyActivity.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DailyActivityFindManyArgs>(args?: SelectSubset<T, DailyActivityFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DailyActivityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DailyActivity.
     * @param {DailyActivityCreateArgs} args - Arguments to create a DailyActivity.
     * @example
     * // Create one DailyActivity
     * const DailyActivity = await prisma.dailyActivity.create({
     *   data: {
     *     // ... data to create a DailyActivity
     *   }
     * })
     * 
     */
    create<T extends DailyActivityCreateArgs>(args: SelectSubset<T, DailyActivityCreateArgs<ExtArgs>>): Prisma__DailyActivityClient<$Result.GetResult<Prisma.$DailyActivityPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DailyActivities.
     * @param {DailyActivityCreateManyArgs} args - Arguments to create many DailyActivities.
     * @example
     * // Create many DailyActivities
     * const dailyActivity = await prisma.dailyActivity.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DailyActivityCreateManyArgs>(args?: SelectSubset<T, DailyActivityCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DailyActivities and returns the data saved in the database.
     * @param {DailyActivityCreateManyAndReturnArgs} args - Arguments to create many DailyActivities.
     * @example
     * // Create many DailyActivities
     * const dailyActivity = await prisma.dailyActivity.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DailyActivities and only return the `id`
     * const dailyActivityWithIdOnly = await prisma.dailyActivity.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DailyActivityCreateManyAndReturnArgs>(args?: SelectSubset<T, DailyActivityCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DailyActivityPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DailyActivity.
     * @param {DailyActivityDeleteArgs} args - Arguments to delete one DailyActivity.
     * @example
     * // Delete one DailyActivity
     * const DailyActivity = await prisma.dailyActivity.delete({
     *   where: {
     *     // ... filter to delete one DailyActivity
     *   }
     * })
     * 
     */
    delete<T extends DailyActivityDeleteArgs>(args: SelectSubset<T, DailyActivityDeleteArgs<ExtArgs>>): Prisma__DailyActivityClient<$Result.GetResult<Prisma.$DailyActivityPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DailyActivity.
     * @param {DailyActivityUpdateArgs} args - Arguments to update one DailyActivity.
     * @example
     * // Update one DailyActivity
     * const dailyActivity = await prisma.dailyActivity.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DailyActivityUpdateArgs>(args: SelectSubset<T, DailyActivityUpdateArgs<ExtArgs>>): Prisma__DailyActivityClient<$Result.GetResult<Prisma.$DailyActivityPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DailyActivities.
     * @param {DailyActivityDeleteManyArgs} args - Arguments to filter DailyActivities to delete.
     * @example
     * // Delete a few DailyActivities
     * const { count } = await prisma.dailyActivity.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DailyActivityDeleteManyArgs>(args?: SelectSubset<T, DailyActivityDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DailyActivities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyActivityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DailyActivities
     * const dailyActivity = await prisma.dailyActivity.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DailyActivityUpdateManyArgs>(args: SelectSubset<T, DailyActivityUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DailyActivities and returns the data updated in the database.
     * @param {DailyActivityUpdateManyAndReturnArgs} args - Arguments to update many DailyActivities.
     * @example
     * // Update many DailyActivities
     * const dailyActivity = await prisma.dailyActivity.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DailyActivities and only return the `id`
     * const dailyActivityWithIdOnly = await prisma.dailyActivity.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DailyActivityUpdateManyAndReturnArgs>(args: SelectSubset<T, DailyActivityUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DailyActivityPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DailyActivity.
     * @param {DailyActivityUpsertArgs} args - Arguments to update or create a DailyActivity.
     * @example
     * // Update or create a DailyActivity
     * const dailyActivity = await prisma.dailyActivity.upsert({
     *   create: {
     *     // ... data to create a DailyActivity
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DailyActivity we want to update
     *   }
     * })
     */
    upsert<T extends DailyActivityUpsertArgs>(args: SelectSubset<T, DailyActivityUpsertArgs<ExtArgs>>): Prisma__DailyActivityClient<$Result.GetResult<Prisma.$DailyActivityPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DailyActivities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyActivityCountArgs} args - Arguments to filter DailyActivities to count.
     * @example
     * // Count the number of DailyActivities
     * const count = await prisma.dailyActivity.count({
     *   where: {
     *     // ... the filter for the DailyActivities we want to count
     *   }
     * })
    **/
    count<T extends DailyActivityCountArgs>(
      args?: Subset<T, DailyActivityCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DailyActivityCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DailyActivity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyActivityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DailyActivityAggregateArgs>(args: Subset<T, DailyActivityAggregateArgs>): Prisma.PrismaPromise<GetDailyActivityAggregateType<T>>

    /**
     * Group by DailyActivity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyActivityGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DailyActivityGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DailyActivityGroupByArgs['orderBy'] }
        : { orderBy?: DailyActivityGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DailyActivityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDailyActivityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DailyActivity model
   */
  readonly fields: DailyActivityFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DailyActivity.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DailyActivityClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the DailyActivity model
   */
  interface DailyActivityFieldRefs {
    readonly id: FieldRef<"DailyActivity", 'Int'>
    readonly date: FieldRef<"DailyActivity", 'DateTime'>
    readonly isActive: FieldRef<"DailyActivity", 'Boolean'>
    readonly userId: FieldRef<"DailyActivity", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * DailyActivity findUnique
   */
  export type DailyActivityFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyActivity
     */
    select?: DailyActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyActivity
     */
    omit?: DailyActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyActivityInclude<ExtArgs> | null
    /**
     * Filter, which DailyActivity to fetch.
     */
    where: DailyActivityWhereUniqueInput
  }

  /**
   * DailyActivity findUniqueOrThrow
   */
  export type DailyActivityFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyActivity
     */
    select?: DailyActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyActivity
     */
    omit?: DailyActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyActivityInclude<ExtArgs> | null
    /**
     * Filter, which DailyActivity to fetch.
     */
    where: DailyActivityWhereUniqueInput
  }

  /**
   * DailyActivity findFirst
   */
  export type DailyActivityFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyActivity
     */
    select?: DailyActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyActivity
     */
    omit?: DailyActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyActivityInclude<ExtArgs> | null
    /**
     * Filter, which DailyActivity to fetch.
     */
    where?: DailyActivityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DailyActivities to fetch.
     */
    orderBy?: DailyActivityOrderByWithRelationInput | DailyActivityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DailyActivities.
     */
    cursor?: DailyActivityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DailyActivities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DailyActivities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DailyActivities.
     */
    distinct?: DailyActivityScalarFieldEnum | DailyActivityScalarFieldEnum[]
  }

  /**
   * DailyActivity findFirstOrThrow
   */
  export type DailyActivityFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyActivity
     */
    select?: DailyActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyActivity
     */
    omit?: DailyActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyActivityInclude<ExtArgs> | null
    /**
     * Filter, which DailyActivity to fetch.
     */
    where?: DailyActivityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DailyActivities to fetch.
     */
    orderBy?: DailyActivityOrderByWithRelationInput | DailyActivityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DailyActivities.
     */
    cursor?: DailyActivityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DailyActivities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DailyActivities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DailyActivities.
     */
    distinct?: DailyActivityScalarFieldEnum | DailyActivityScalarFieldEnum[]
  }

  /**
   * DailyActivity findMany
   */
  export type DailyActivityFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyActivity
     */
    select?: DailyActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyActivity
     */
    omit?: DailyActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyActivityInclude<ExtArgs> | null
    /**
     * Filter, which DailyActivities to fetch.
     */
    where?: DailyActivityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DailyActivities to fetch.
     */
    orderBy?: DailyActivityOrderByWithRelationInput | DailyActivityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DailyActivities.
     */
    cursor?: DailyActivityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DailyActivities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DailyActivities.
     */
    skip?: number
    distinct?: DailyActivityScalarFieldEnum | DailyActivityScalarFieldEnum[]
  }

  /**
   * DailyActivity create
   */
  export type DailyActivityCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyActivity
     */
    select?: DailyActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyActivity
     */
    omit?: DailyActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyActivityInclude<ExtArgs> | null
    /**
     * The data needed to create a DailyActivity.
     */
    data: XOR<DailyActivityCreateInput, DailyActivityUncheckedCreateInput>
  }

  /**
   * DailyActivity createMany
   */
  export type DailyActivityCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DailyActivities.
     */
    data: DailyActivityCreateManyInput | DailyActivityCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DailyActivity createManyAndReturn
   */
  export type DailyActivityCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyActivity
     */
    select?: DailyActivitySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DailyActivity
     */
    omit?: DailyActivityOmit<ExtArgs> | null
    /**
     * The data used to create many DailyActivities.
     */
    data: DailyActivityCreateManyInput | DailyActivityCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyActivityIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * DailyActivity update
   */
  export type DailyActivityUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyActivity
     */
    select?: DailyActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyActivity
     */
    omit?: DailyActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyActivityInclude<ExtArgs> | null
    /**
     * The data needed to update a DailyActivity.
     */
    data: XOR<DailyActivityUpdateInput, DailyActivityUncheckedUpdateInput>
    /**
     * Choose, which DailyActivity to update.
     */
    where: DailyActivityWhereUniqueInput
  }

  /**
   * DailyActivity updateMany
   */
  export type DailyActivityUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DailyActivities.
     */
    data: XOR<DailyActivityUpdateManyMutationInput, DailyActivityUncheckedUpdateManyInput>
    /**
     * Filter which DailyActivities to update
     */
    where?: DailyActivityWhereInput
    /**
     * Limit how many DailyActivities to update.
     */
    limit?: number
  }

  /**
   * DailyActivity updateManyAndReturn
   */
  export type DailyActivityUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyActivity
     */
    select?: DailyActivitySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DailyActivity
     */
    omit?: DailyActivityOmit<ExtArgs> | null
    /**
     * The data used to update DailyActivities.
     */
    data: XOR<DailyActivityUpdateManyMutationInput, DailyActivityUncheckedUpdateManyInput>
    /**
     * Filter which DailyActivities to update
     */
    where?: DailyActivityWhereInput
    /**
     * Limit how many DailyActivities to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyActivityIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * DailyActivity upsert
   */
  export type DailyActivityUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyActivity
     */
    select?: DailyActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyActivity
     */
    omit?: DailyActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyActivityInclude<ExtArgs> | null
    /**
     * The filter to search for the DailyActivity to update in case it exists.
     */
    where: DailyActivityWhereUniqueInput
    /**
     * In case the DailyActivity found by the `where` argument doesn't exist, create a new DailyActivity with this data.
     */
    create: XOR<DailyActivityCreateInput, DailyActivityUncheckedCreateInput>
    /**
     * In case the DailyActivity was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DailyActivityUpdateInput, DailyActivityUncheckedUpdateInput>
  }

  /**
   * DailyActivity delete
   */
  export type DailyActivityDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyActivity
     */
    select?: DailyActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyActivity
     */
    omit?: DailyActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyActivityInclude<ExtArgs> | null
    /**
     * Filter which DailyActivity to delete.
     */
    where: DailyActivityWhereUniqueInput
  }

  /**
   * DailyActivity deleteMany
   */
  export type DailyActivityDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DailyActivities to delete
     */
    where?: DailyActivityWhereInput
    /**
     * Limit how many DailyActivities to delete.
     */
    limit?: number
  }

  /**
   * DailyActivity without action
   */
  export type DailyActivityDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyActivity
     */
    select?: DailyActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyActivity
     */
    omit?: DailyActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyActivityInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    surname: 'surname',
    birthDate: 'birthDate',
    phoneNumber: 'phoneNumber',
    email: 'email',
    password: 'password',
    avatarUrl: 'avatarUrl',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    hashedRefreshToken: 'hashedRefreshToken'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const CourseScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    imageUrl: 'imageUrl',
    difficulty: 'difficulty',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CourseScalarFieldEnum = (typeof CourseScalarFieldEnum)[keyof typeof CourseScalarFieldEnum]


  export const TestScalarFieldEnum: {
    id: 'id',
    title: 'title',
    courseId: 'courseId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TestScalarFieldEnum = (typeof TestScalarFieldEnum)[keyof typeof TestScalarFieldEnum]


  export const TaskScalarFieldEnum: {
    id: 'id',
    question: 'question',
    options: 'options',
    correctAnswer: 'correctAnswer',
    type: 'type',
    testId: 'testId'
  };

  export type TaskScalarFieldEnum = (typeof TaskScalarFieldEnum)[keyof typeof TaskScalarFieldEnum]


  export const UserTestProgressScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    testId: 'testId',
    completed: 'completed',
    score: 'score',
    completedAt: 'completedAt'
  };

  export type UserTestProgressScalarFieldEnum = (typeof UserTestProgressScalarFieldEnum)[keyof typeof UserTestProgressScalarFieldEnum]


  export const UserTaskAnswerScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    taskId: 'taskId',
    answer: 'answer',
    isCorrect: 'isCorrect'
  };

  export type UserTaskAnswerScalarFieldEnum = (typeof UserTaskAnswerScalarFieldEnum)[keyof typeof UserTaskAnswerScalarFieldEnum]


  export const AchievementScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    iconUrl: 'iconUrl',
    type: 'type',
    conditionValue: 'conditionValue',
    createdAt: 'createdAt'
  };

  export type AchievementScalarFieldEnum = (typeof AchievementScalarFieldEnum)[keyof typeof AchievementScalarFieldEnum]


  export const UserAchievementScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    achievementId: 'achievementId',
    receivedAt: 'receivedAt'
  };

  export type UserAchievementScalarFieldEnum = (typeof UserAchievementScalarFieldEnum)[keyof typeof UserAchievementScalarFieldEnum]


  export const WordStatisticScalarFieldEnum: {
    id: 'id',
    word: 'word',
    learnedAt: 'learnedAt',
    userId: 'userId'
  };

  export type WordStatisticScalarFieldEnum = (typeof WordStatisticScalarFieldEnum)[keyof typeof WordStatisticScalarFieldEnum]


  export const DailyActivityScalarFieldEnum: {
    id: 'id',
    date: 'date',
    isActive: 'isActive',
    userId: 'userId'
  };

  export type DailyActivityScalarFieldEnum = (typeof DailyActivityScalarFieldEnum)[keyof typeof DailyActivityScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Difficulty'
   */
  export type EnumDifficultyFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Difficulty'>
    


  /**
   * Reference to a field of type 'Difficulty[]'
   */
  export type ListEnumDifficultyFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Difficulty[]'>
    


  /**
   * Reference to a field of type 'TaskType'
   */
  export type EnumTaskTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TaskType'>
    


  /**
   * Reference to a field of type 'TaskType[]'
   */
  export type ListEnumTaskTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TaskType[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'AchievementType'
   */
  export type EnumAchievementTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AchievementType'>
    


  /**
   * Reference to a field of type 'AchievementType[]'
   */
  export type ListEnumAchievementTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AchievementType[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    name?: StringFilter<"User"> | string
    surname?: StringFilter<"User"> | string
    birthDate?: DateTimeFilter<"User"> | Date | string
    phoneNumber?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    avatarUrl?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    hashedRefreshToken?: StringNullableFilter<"User"> | string | null
    testProgress?: UserTestProgressListRelationFilter
    userAnswers?: UserTaskAnswerListRelationFilter
    userAchievement?: UserAchievementListRelationFilter
    wordStats?: WordStatisticListRelationFilter
    dailyStats?: DailyActivityListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    surname?: SortOrder
    birthDate?: SortOrder
    phoneNumber?: SortOrder
    email?: SortOrder
    password?: SortOrder
    avatarUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    hashedRefreshToken?: SortOrderInput | SortOrder
    testProgress?: UserTestProgressOrderByRelationAggregateInput
    userAnswers?: UserTaskAnswerOrderByRelationAggregateInput
    userAchievement?: UserAchievementOrderByRelationAggregateInput
    wordStats?: WordStatisticOrderByRelationAggregateInput
    dailyStats?: DailyActivityOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    surname?: StringFilter<"User"> | string
    birthDate?: DateTimeFilter<"User"> | Date | string
    phoneNumber?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    avatarUrl?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    hashedRefreshToken?: StringNullableFilter<"User"> | string | null
    testProgress?: UserTestProgressListRelationFilter
    userAnswers?: UserTaskAnswerListRelationFilter
    userAchievement?: UserAchievementListRelationFilter
    wordStats?: WordStatisticListRelationFilter
    dailyStats?: DailyActivityListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    surname?: SortOrder
    birthDate?: SortOrder
    phoneNumber?: SortOrder
    email?: SortOrder
    password?: SortOrder
    avatarUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    hashedRefreshToken?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    name?: StringWithAggregatesFilter<"User"> | string
    surname?: StringWithAggregatesFilter<"User"> | string
    birthDate?: DateTimeWithAggregatesFilter<"User"> | Date | string
    phoneNumber?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    avatarUrl?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    hashedRefreshToken?: StringNullableWithAggregatesFilter<"User"> | string | null
  }

  export type CourseWhereInput = {
    AND?: CourseWhereInput | CourseWhereInput[]
    OR?: CourseWhereInput[]
    NOT?: CourseWhereInput | CourseWhereInput[]
    id?: IntFilter<"Course"> | number
    title?: StringFilter<"Course"> | string
    description?: StringFilter<"Course"> | string
    imageUrl?: StringNullableFilter<"Course"> | string | null
    difficulty?: EnumDifficultyFilter<"Course"> | $Enums.Difficulty
    createdAt?: DateTimeFilter<"Course"> | Date | string
    updatedAt?: DateTimeFilter<"Course"> | Date | string
    tests?: TestListRelationFilter
  }

  export type CourseOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    imageUrl?: SortOrderInput | SortOrder
    difficulty?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    tests?: TestOrderByRelationAggregateInput
  }

  export type CourseWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CourseWhereInput | CourseWhereInput[]
    OR?: CourseWhereInput[]
    NOT?: CourseWhereInput | CourseWhereInput[]
    title?: StringFilter<"Course"> | string
    description?: StringFilter<"Course"> | string
    imageUrl?: StringNullableFilter<"Course"> | string | null
    difficulty?: EnumDifficultyFilter<"Course"> | $Enums.Difficulty
    createdAt?: DateTimeFilter<"Course"> | Date | string
    updatedAt?: DateTimeFilter<"Course"> | Date | string
    tests?: TestListRelationFilter
  }, "id">

  export type CourseOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    imageUrl?: SortOrderInput | SortOrder
    difficulty?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CourseCountOrderByAggregateInput
    _avg?: CourseAvgOrderByAggregateInput
    _max?: CourseMaxOrderByAggregateInput
    _min?: CourseMinOrderByAggregateInput
    _sum?: CourseSumOrderByAggregateInput
  }

  export type CourseScalarWhereWithAggregatesInput = {
    AND?: CourseScalarWhereWithAggregatesInput | CourseScalarWhereWithAggregatesInput[]
    OR?: CourseScalarWhereWithAggregatesInput[]
    NOT?: CourseScalarWhereWithAggregatesInput | CourseScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Course"> | number
    title?: StringWithAggregatesFilter<"Course"> | string
    description?: StringWithAggregatesFilter<"Course"> | string
    imageUrl?: StringNullableWithAggregatesFilter<"Course"> | string | null
    difficulty?: EnumDifficultyWithAggregatesFilter<"Course"> | $Enums.Difficulty
    createdAt?: DateTimeWithAggregatesFilter<"Course"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Course"> | Date | string
  }

  export type TestWhereInput = {
    AND?: TestWhereInput | TestWhereInput[]
    OR?: TestWhereInput[]
    NOT?: TestWhereInput | TestWhereInput[]
    id?: IntFilter<"Test"> | number
    title?: StringFilter<"Test"> | string
    courseId?: IntFilter<"Test"> | number
    createdAt?: DateTimeFilter<"Test"> | Date | string
    updatedAt?: DateTimeFilter<"Test"> | Date | string
    course?: XOR<CourseScalarRelationFilter, CourseWhereInput>
    tasks?: TaskListRelationFilter
    progress?: UserTestProgressListRelationFilter
  }

  export type TestOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    courseId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    course?: CourseOrderByWithRelationInput
    tasks?: TaskOrderByRelationAggregateInput
    progress?: UserTestProgressOrderByRelationAggregateInput
  }

  export type TestWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TestWhereInput | TestWhereInput[]
    OR?: TestWhereInput[]
    NOT?: TestWhereInput | TestWhereInput[]
    title?: StringFilter<"Test"> | string
    courseId?: IntFilter<"Test"> | number
    createdAt?: DateTimeFilter<"Test"> | Date | string
    updatedAt?: DateTimeFilter<"Test"> | Date | string
    course?: XOR<CourseScalarRelationFilter, CourseWhereInput>
    tasks?: TaskListRelationFilter
    progress?: UserTestProgressListRelationFilter
  }, "id">

  export type TestOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    courseId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TestCountOrderByAggregateInput
    _avg?: TestAvgOrderByAggregateInput
    _max?: TestMaxOrderByAggregateInput
    _min?: TestMinOrderByAggregateInput
    _sum?: TestSumOrderByAggregateInput
  }

  export type TestScalarWhereWithAggregatesInput = {
    AND?: TestScalarWhereWithAggregatesInput | TestScalarWhereWithAggregatesInput[]
    OR?: TestScalarWhereWithAggregatesInput[]
    NOT?: TestScalarWhereWithAggregatesInput | TestScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Test"> | number
    title?: StringWithAggregatesFilter<"Test"> | string
    courseId?: IntWithAggregatesFilter<"Test"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Test"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Test"> | Date | string
  }

  export type TaskWhereInput = {
    AND?: TaskWhereInput | TaskWhereInput[]
    OR?: TaskWhereInput[]
    NOT?: TaskWhereInput | TaskWhereInput[]
    id?: IntFilter<"Task"> | number
    question?: StringFilter<"Task"> | string
    options?: StringNullableListFilter<"Task">
    correctAnswer?: StringNullableListFilter<"Task">
    type?: EnumTaskTypeFilter<"Task"> | $Enums.TaskType
    testId?: IntFilter<"Task"> | number
    test?: XOR<TestScalarRelationFilter, TestWhereInput>
    userAnswers?: UserTaskAnswerListRelationFilter
  }

  export type TaskOrderByWithRelationInput = {
    id?: SortOrder
    question?: SortOrder
    options?: SortOrder
    correctAnswer?: SortOrder
    type?: SortOrder
    testId?: SortOrder
    test?: TestOrderByWithRelationInput
    userAnswers?: UserTaskAnswerOrderByRelationAggregateInput
  }

  export type TaskWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TaskWhereInput | TaskWhereInput[]
    OR?: TaskWhereInput[]
    NOT?: TaskWhereInput | TaskWhereInput[]
    question?: StringFilter<"Task"> | string
    options?: StringNullableListFilter<"Task">
    correctAnswer?: StringNullableListFilter<"Task">
    type?: EnumTaskTypeFilter<"Task"> | $Enums.TaskType
    testId?: IntFilter<"Task"> | number
    test?: XOR<TestScalarRelationFilter, TestWhereInput>
    userAnswers?: UserTaskAnswerListRelationFilter
  }, "id">

  export type TaskOrderByWithAggregationInput = {
    id?: SortOrder
    question?: SortOrder
    options?: SortOrder
    correctAnswer?: SortOrder
    type?: SortOrder
    testId?: SortOrder
    _count?: TaskCountOrderByAggregateInput
    _avg?: TaskAvgOrderByAggregateInput
    _max?: TaskMaxOrderByAggregateInput
    _min?: TaskMinOrderByAggregateInput
    _sum?: TaskSumOrderByAggregateInput
  }

  export type TaskScalarWhereWithAggregatesInput = {
    AND?: TaskScalarWhereWithAggregatesInput | TaskScalarWhereWithAggregatesInput[]
    OR?: TaskScalarWhereWithAggregatesInput[]
    NOT?: TaskScalarWhereWithAggregatesInput | TaskScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Task"> | number
    question?: StringWithAggregatesFilter<"Task"> | string
    options?: StringNullableListFilter<"Task">
    correctAnswer?: StringNullableListFilter<"Task">
    type?: EnumTaskTypeWithAggregatesFilter<"Task"> | $Enums.TaskType
    testId?: IntWithAggregatesFilter<"Task"> | number
  }

  export type UserTestProgressWhereInput = {
    AND?: UserTestProgressWhereInput | UserTestProgressWhereInput[]
    OR?: UserTestProgressWhereInput[]
    NOT?: UserTestProgressWhereInput | UserTestProgressWhereInput[]
    id?: IntFilter<"UserTestProgress"> | number
    userId?: IntFilter<"UserTestProgress"> | number
    testId?: IntFilter<"UserTestProgress"> | number
    completed?: BoolFilter<"UserTestProgress"> | boolean
    score?: IntNullableFilter<"UserTestProgress"> | number | null
    completedAt?: DateTimeNullableFilter<"UserTestProgress"> | Date | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    test?: XOR<TestScalarRelationFilter, TestWhereInput>
  }

  export type UserTestProgressOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    testId?: SortOrder
    completed?: SortOrder
    score?: SortOrderInput | SortOrder
    completedAt?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
    test?: TestOrderByWithRelationInput
  }

  export type UserTestProgressWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId_testId?: UserTestProgressUserIdTestIdCompoundUniqueInput
    AND?: UserTestProgressWhereInput | UserTestProgressWhereInput[]
    OR?: UserTestProgressWhereInput[]
    NOT?: UserTestProgressWhereInput | UserTestProgressWhereInput[]
    userId?: IntFilter<"UserTestProgress"> | number
    testId?: IntFilter<"UserTestProgress"> | number
    completed?: BoolFilter<"UserTestProgress"> | boolean
    score?: IntNullableFilter<"UserTestProgress"> | number | null
    completedAt?: DateTimeNullableFilter<"UserTestProgress"> | Date | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    test?: XOR<TestScalarRelationFilter, TestWhereInput>
  }, "id" | "userId_testId">

  export type UserTestProgressOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    testId?: SortOrder
    completed?: SortOrder
    score?: SortOrderInput | SortOrder
    completedAt?: SortOrderInput | SortOrder
    _count?: UserTestProgressCountOrderByAggregateInput
    _avg?: UserTestProgressAvgOrderByAggregateInput
    _max?: UserTestProgressMaxOrderByAggregateInput
    _min?: UserTestProgressMinOrderByAggregateInput
    _sum?: UserTestProgressSumOrderByAggregateInput
  }

  export type UserTestProgressScalarWhereWithAggregatesInput = {
    AND?: UserTestProgressScalarWhereWithAggregatesInput | UserTestProgressScalarWhereWithAggregatesInput[]
    OR?: UserTestProgressScalarWhereWithAggregatesInput[]
    NOT?: UserTestProgressScalarWhereWithAggregatesInput | UserTestProgressScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"UserTestProgress"> | number
    userId?: IntWithAggregatesFilter<"UserTestProgress"> | number
    testId?: IntWithAggregatesFilter<"UserTestProgress"> | number
    completed?: BoolWithAggregatesFilter<"UserTestProgress"> | boolean
    score?: IntNullableWithAggregatesFilter<"UserTestProgress"> | number | null
    completedAt?: DateTimeNullableWithAggregatesFilter<"UserTestProgress"> | Date | string | null
  }

  export type UserTaskAnswerWhereInput = {
    AND?: UserTaskAnswerWhereInput | UserTaskAnswerWhereInput[]
    OR?: UserTaskAnswerWhereInput[]
    NOT?: UserTaskAnswerWhereInput | UserTaskAnswerWhereInput[]
    id?: IntFilter<"UserTaskAnswer"> | number
    userId?: IntFilter<"UserTaskAnswer"> | number
    taskId?: IntFilter<"UserTaskAnswer"> | number
    answer?: StringFilter<"UserTaskAnswer"> | string
    isCorrect?: BoolFilter<"UserTaskAnswer"> | boolean
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    task?: XOR<TaskScalarRelationFilter, TaskWhereInput>
  }

  export type UserTaskAnswerOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    taskId?: SortOrder
    answer?: SortOrder
    isCorrect?: SortOrder
    user?: UserOrderByWithRelationInput
    task?: TaskOrderByWithRelationInput
  }

  export type UserTaskAnswerWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId_taskId?: UserTaskAnswerUserIdTaskIdCompoundUniqueInput
    AND?: UserTaskAnswerWhereInput | UserTaskAnswerWhereInput[]
    OR?: UserTaskAnswerWhereInput[]
    NOT?: UserTaskAnswerWhereInput | UserTaskAnswerWhereInput[]
    userId?: IntFilter<"UserTaskAnswer"> | number
    taskId?: IntFilter<"UserTaskAnswer"> | number
    answer?: StringFilter<"UserTaskAnswer"> | string
    isCorrect?: BoolFilter<"UserTaskAnswer"> | boolean
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    task?: XOR<TaskScalarRelationFilter, TaskWhereInput>
  }, "id" | "userId_taskId">

  export type UserTaskAnswerOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    taskId?: SortOrder
    answer?: SortOrder
    isCorrect?: SortOrder
    _count?: UserTaskAnswerCountOrderByAggregateInput
    _avg?: UserTaskAnswerAvgOrderByAggregateInput
    _max?: UserTaskAnswerMaxOrderByAggregateInput
    _min?: UserTaskAnswerMinOrderByAggregateInput
    _sum?: UserTaskAnswerSumOrderByAggregateInput
  }

  export type UserTaskAnswerScalarWhereWithAggregatesInput = {
    AND?: UserTaskAnswerScalarWhereWithAggregatesInput | UserTaskAnswerScalarWhereWithAggregatesInput[]
    OR?: UserTaskAnswerScalarWhereWithAggregatesInput[]
    NOT?: UserTaskAnswerScalarWhereWithAggregatesInput | UserTaskAnswerScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"UserTaskAnswer"> | number
    userId?: IntWithAggregatesFilter<"UserTaskAnswer"> | number
    taskId?: IntWithAggregatesFilter<"UserTaskAnswer"> | number
    answer?: StringWithAggregatesFilter<"UserTaskAnswer"> | string
    isCorrect?: BoolWithAggregatesFilter<"UserTaskAnswer"> | boolean
  }

  export type AchievementWhereInput = {
    AND?: AchievementWhereInput | AchievementWhereInput[]
    OR?: AchievementWhereInput[]
    NOT?: AchievementWhereInput | AchievementWhereInput[]
    id?: IntFilter<"Achievement"> | number
    title?: StringFilter<"Achievement"> | string
    description?: StringFilter<"Achievement"> | string
    iconUrl?: StringNullableFilter<"Achievement"> | string | null
    type?: EnumAchievementTypeNullableFilter<"Achievement"> | $Enums.AchievementType | null
    conditionValue?: IntNullableFilter<"Achievement"> | number | null
    createdAt?: DateTimeFilter<"Achievement"> | Date | string
    users?: UserAchievementListRelationFilter
  }

  export type AchievementOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    iconUrl?: SortOrderInput | SortOrder
    type?: SortOrderInput | SortOrder
    conditionValue?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    users?: UserAchievementOrderByRelationAggregateInput
  }

  export type AchievementWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AchievementWhereInput | AchievementWhereInput[]
    OR?: AchievementWhereInput[]
    NOT?: AchievementWhereInput | AchievementWhereInput[]
    title?: StringFilter<"Achievement"> | string
    description?: StringFilter<"Achievement"> | string
    iconUrl?: StringNullableFilter<"Achievement"> | string | null
    type?: EnumAchievementTypeNullableFilter<"Achievement"> | $Enums.AchievementType | null
    conditionValue?: IntNullableFilter<"Achievement"> | number | null
    createdAt?: DateTimeFilter<"Achievement"> | Date | string
    users?: UserAchievementListRelationFilter
  }, "id">

  export type AchievementOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    iconUrl?: SortOrderInput | SortOrder
    type?: SortOrderInput | SortOrder
    conditionValue?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: AchievementCountOrderByAggregateInput
    _avg?: AchievementAvgOrderByAggregateInput
    _max?: AchievementMaxOrderByAggregateInput
    _min?: AchievementMinOrderByAggregateInput
    _sum?: AchievementSumOrderByAggregateInput
  }

  export type AchievementScalarWhereWithAggregatesInput = {
    AND?: AchievementScalarWhereWithAggregatesInput | AchievementScalarWhereWithAggregatesInput[]
    OR?: AchievementScalarWhereWithAggregatesInput[]
    NOT?: AchievementScalarWhereWithAggregatesInput | AchievementScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Achievement"> | number
    title?: StringWithAggregatesFilter<"Achievement"> | string
    description?: StringWithAggregatesFilter<"Achievement"> | string
    iconUrl?: StringNullableWithAggregatesFilter<"Achievement"> | string | null
    type?: EnumAchievementTypeNullableWithAggregatesFilter<"Achievement"> | $Enums.AchievementType | null
    conditionValue?: IntNullableWithAggregatesFilter<"Achievement"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"Achievement"> | Date | string
  }

  export type UserAchievementWhereInput = {
    AND?: UserAchievementWhereInput | UserAchievementWhereInput[]
    OR?: UserAchievementWhereInput[]
    NOT?: UserAchievementWhereInput | UserAchievementWhereInput[]
    id?: IntFilter<"UserAchievement"> | number
    userId?: IntFilter<"UserAchievement"> | number
    achievementId?: IntFilter<"UserAchievement"> | number
    receivedAt?: DateTimeFilter<"UserAchievement"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    achievement?: XOR<AchievementScalarRelationFilter, AchievementWhereInput>
  }

  export type UserAchievementOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    achievementId?: SortOrder
    receivedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    achievement?: AchievementOrderByWithRelationInput
  }

  export type UserAchievementWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId_achievementId?: UserAchievementUserIdAchievementIdCompoundUniqueInput
    AND?: UserAchievementWhereInput | UserAchievementWhereInput[]
    OR?: UserAchievementWhereInput[]
    NOT?: UserAchievementWhereInput | UserAchievementWhereInput[]
    userId?: IntFilter<"UserAchievement"> | number
    achievementId?: IntFilter<"UserAchievement"> | number
    receivedAt?: DateTimeFilter<"UserAchievement"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    achievement?: XOR<AchievementScalarRelationFilter, AchievementWhereInput>
  }, "id" | "userId_achievementId">

  export type UserAchievementOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    achievementId?: SortOrder
    receivedAt?: SortOrder
    _count?: UserAchievementCountOrderByAggregateInput
    _avg?: UserAchievementAvgOrderByAggregateInput
    _max?: UserAchievementMaxOrderByAggregateInput
    _min?: UserAchievementMinOrderByAggregateInput
    _sum?: UserAchievementSumOrderByAggregateInput
  }

  export type UserAchievementScalarWhereWithAggregatesInput = {
    AND?: UserAchievementScalarWhereWithAggregatesInput | UserAchievementScalarWhereWithAggregatesInput[]
    OR?: UserAchievementScalarWhereWithAggregatesInput[]
    NOT?: UserAchievementScalarWhereWithAggregatesInput | UserAchievementScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"UserAchievement"> | number
    userId?: IntWithAggregatesFilter<"UserAchievement"> | number
    achievementId?: IntWithAggregatesFilter<"UserAchievement"> | number
    receivedAt?: DateTimeWithAggregatesFilter<"UserAchievement"> | Date | string
  }

  export type WordStatisticWhereInput = {
    AND?: WordStatisticWhereInput | WordStatisticWhereInput[]
    OR?: WordStatisticWhereInput[]
    NOT?: WordStatisticWhereInput | WordStatisticWhereInput[]
    id?: IntFilter<"WordStatistic"> | number
    word?: StringFilter<"WordStatistic"> | string
    learnedAt?: DateTimeFilter<"WordStatistic"> | Date | string
    userId?: IntFilter<"WordStatistic"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type WordStatisticOrderByWithRelationInput = {
    id?: SortOrder
    word?: SortOrder
    learnedAt?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type WordStatisticWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: WordStatisticWhereInput | WordStatisticWhereInput[]
    OR?: WordStatisticWhereInput[]
    NOT?: WordStatisticWhereInput | WordStatisticWhereInput[]
    word?: StringFilter<"WordStatistic"> | string
    learnedAt?: DateTimeFilter<"WordStatistic"> | Date | string
    userId?: IntFilter<"WordStatistic"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type WordStatisticOrderByWithAggregationInput = {
    id?: SortOrder
    word?: SortOrder
    learnedAt?: SortOrder
    userId?: SortOrder
    _count?: WordStatisticCountOrderByAggregateInput
    _avg?: WordStatisticAvgOrderByAggregateInput
    _max?: WordStatisticMaxOrderByAggregateInput
    _min?: WordStatisticMinOrderByAggregateInput
    _sum?: WordStatisticSumOrderByAggregateInput
  }

  export type WordStatisticScalarWhereWithAggregatesInput = {
    AND?: WordStatisticScalarWhereWithAggregatesInput | WordStatisticScalarWhereWithAggregatesInput[]
    OR?: WordStatisticScalarWhereWithAggregatesInput[]
    NOT?: WordStatisticScalarWhereWithAggregatesInput | WordStatisticScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"WordStatistic"> | number
    word?: StringWithAggregatesFilter<"WordStatistic"> | string
    learnedAt?: DateTimeWithAggregatesFilter<"WordStatistic"> | Date | string
    userId?: IntWithAggregatesFilter<"WordStatistic"> | number
  }

  export type DailyActivityWhereInput = {
    AND?: DailyActivityWhereInput | DailyActivityWhereInput[]
    OR?: DailyActivityWhereInput[]
    NOT?: DailyActivityWhereInput | DailyActivityWhereInput[]
    id?: IntFilter<"DailyActivity"> | number
    date?: DateTimeFilter<"DailyActivity"> | Date | string
    isActive?: BoolFilter<"DailyActivity"> | boolean
    userId?: IntFilter<"DailyActivity"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type DailyActivityOrderByWithRelationInput = {
    id?: SortOrder
    date?: SortOrder
    isActive?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type DailyActivityWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId_date?: DailyActivityUserIdDateCompoundUniqueInput
    AND?: DailyActivityWhereInput | DailyActivityWhereInput[]
    OR?: DailyActivityWhereInput[]
    NOT?: DailyActivityWhereInput | DailyActivityWhereInput[]
    date?: DateTimeFilter<"DailyActivity"> | Date | string
    isActive?: BoolFilter<"DailyActivity"> | boolean
    userId?: IntFilter<"DailyActivity"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId_date">

  export type DailyActivityOrderByWithAggregationInput = {
    id?: SortOrder
    date?: SortOrder
    isActive?: SortOrder
    userId?: SortOrder
    _count?: DailyActivityCountOrderByAggregateInput
    _avg?: DailyActivityAvgOrderByAggregateInput
    _max?: DailyActivityMaxOrderByAggregateInput
    _min?: DailyActivityMinOrderByAggregateInput
    _sum?: DailyActivitySumOrderByAggregateInput
  }

  export type DailyActivityScalarWhereWithAggregatesInput = {
    AND?: DailyActivityScalarWhereWithAggregatesInput | DailyActivityScalarWhereWithAggregatesInput[]
    OR?: DailyActivityScalarWhereWithAggregatesInput[]
    NOT?: DailyActivityScalarWhereWithAggregatesInput | DailyActivityScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"DailyActivity"> | number
    date?: DateTimeWithAggregatesFilter<"DailyActivity"> | Date | string
    isActive?: BoolWithAggregatesFilter<"DailyActivity"> | boolean
    userId?: IntWithAggregatesFilter<"DailyActivity"> | number
  }

  export type UserCreateInput = {
    name: string
    surname: string
    birthDate: Date | string
    phoneNumber: string
    email: string
    password: string
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    hashedRefreshToken?: string | null
    testProgress?: UserTestProgressCreateNestedManyWithoutUserInput
    userAnswers?: UserTaskAnswerCreateNestedManyWithoutUserInput
    userAchievement?: UserAchievementCreateNestedManyWithoutUserInput
    wordStats?: WordStatisticCreateNestedManyWithoutUserInput
    dailyStats?: DailyActivityCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    name: string
    surname: string
    birthDate: Date | string
    phoneNumber: string
    email: string
    password: string
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    hashedRefreshToken?: string | null
    testProgress?: UserTestProgressUncheckedCreateNestedManyWithoutUserInput
    userAnswers?: UserTaskAnswerUncheckedCreateNestedManyWithoutUserInput
    userAchievement?: UserAchievementUncheckedCreateNestedManyWithoutUserInput
    wordStats?: WordStatisticUncheckedCreateNestedManyWithoutUserInput
    dailyStats?: DailyActivityUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hashedRefreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    testProgress?: UserTestProgressUpdateManyWithoutUserNestedInput
    userAnswers?: UserTaskAnswerUpdateManyWithoutUserNestedInput
    userAchievement?: UserAchievementUpdateManyWithoutUserNestedInput
    wordStats?: WordStatisticUpdateManyWithoutUserNestedInput
    dailyStats?: DailyActivityUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hashedRefreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    testProgress?: UserTestProgressUncheckedUpdateManyWithoutUserNestedInput
    userAnswers?: UserTaskAnswerUncheckedUpdateManyWithoutUserNestedInput
    userAchievement?: UserAchievementUncheckedUpdateManyWithoutUserNestedInput
    wordStats?: WordStatisticUncheckedUpdateManyWithoutUserNestedInput
    dailyStats?: DailyActivityUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    name: string
    surname: string
    birthDate: Date | string
    phoneNumber: string
    email: string
    password: string
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    hashedRefreshToken?: string | null
  }

  export type UserUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hashedRefreshToken?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hashedRefreshToken?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CourseCreateInput = {
    title: string
    description: string
    imageUrl?: string | null
    difficulty: $Enums.Difficulty
    createdAt?: Date | string
    updatedAt?: Date | string
    tests?: TestCreateNestedManyWithoutCourseInput
  }

  export type CourseUncheckedCreateInput = {
    id?: number
    title: string
    description: string
    imageUrl?: string | null
    difficulty: $Enums.Difficulty
    createdAt?: Date | string
    updatedAt?: Date | string
    tests?: TestUncheckedCreateNestedManyWithoutCourseInput
  }

  export type CourseUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tests?: TestUpdateManyWithoutCourseNestedInput
  }

  export type CourseUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tests?: TestUncheckedUpdateManyWithoutCourseNestedInput
  }

  export type CourseCreateManyInput = {
    id?: number
    title: string
    description: string
    imageUrl?: string | null
    difficulty: $Enums.Difficulty
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CourseUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CourseUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TestCreateInput = {
    title: string
    createdAt?: Date | string
    updatedAt?: Date | string
    course: CourseCreateNestedOneWithoutTestsInput
    tasks?: TaskCreateNestedManyWithoutTestInput
    progress?: UserTestProgressCreateNestedManyWithoutTestInput
  }

  export type TestUncheckedCreateInput = {
    id?: number
    title: string
    courseId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    tasks?: TaskUncheckedCreateNestedManyWithoutTestInput
    progress?: UserTestProgressUncheckedCreateNestedManyWithoutTestInput
  }

  export type TestUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    course?: CourseUpdateOneRequiredWithoutTestsNestedInput
    tasks?: TaskUpdateManyWithoutTestNestedInput
    progress?: UserTestProgressUpdateManyWithoutTestNestedInput
  }

  export type TestUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    courseId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tasks?: TaskUncheckedUpdateManyWithoutTestNestedInput
    progress?: UserTestProgressUncheckedUpdateManyWithoutTestNestedInput
  }

  export type TestCreateManyInput = {
    id?: number
    title: string
    courseId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TestUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TestUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    courseId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskCreateInput = {
    question: string
    options?: TaskCreateoptionsInput | string[]
    correctAnswer?: TaskCreatecorrectAnswerInput | string[]
    type: $Enums.TaskType
    test: TestCreateNestedOneWithoutTasksInput
    userAnswers?: UserTaskAnswerCreateNestedManyWithoutTaskInput
  }

  export type TaskUncheckedCreateInput = {
    id?: number
    question: string
    options?: TaskCreateoptionsInput | string[]
    correctAnswer?: TaskCreatecorrectAnswerInput | string[]
    type: $Enums.TaskType
    testId: number
    userAnswers?: UserTaskAnswerUncheckedCreateNestedManyWithoutTaskInput
  }

  export type TaskUpdateInput = {
    question?: StringFieldUpdateOperationsInput | string
    options?: TaskUpdateoptionsInput | string[]
    correctAnswer?: TaskUpdatecorrectAnswerInput | string[]
    type?: EnumTaskTypeFieldUpdateOperationsInput | $Enums.TaskType
    test?: TestUpdateOneRequiredWithoutTasksNestedInput
    userAnswers?: UserTaskAnswerUpdateManyWithoutTaskNestedInput
  }

  export type TaskUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    question?: StringFieldUpdateOperationsInput | string
    options?: TaskUpdateoptionsInput | string[]
    correctAnswer?: TaskUpdatecorrectAnswerInput | string[]
    type?: EnumTaskTypeFieldUpdateOperationsInput | $Enums.TaskType
    testId?: IntFieldUpdateOperationsInput | number
    userAnswers?: UserTaskAnswerUncheckedUpdateManyWithoutTaskNestedInput
  }

  export type TaskCreateManyInput = {
    id?: number
    question: string
    options?: TaskCreateoptionsInput | string[]
    correctAnswer?: TaskCreatecorrectAnswerInput | string[]
    type: $Enums.TaskType
    testId: number
  }

  export type TaskUpdateManyMutationInput = {
    question?: StringFieldUpdateOperationsInput | string
    options?: TaskUpdateoptionsInput | string[]
    correctAnswer?: TaskUpdatecorrectAnswerInput | string[]
    type?: EnumTaskTypeFieldUpdateOperationsInput | $Enums.TaskType
  }

  export type TaskUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    question?: StringFieldUpdateOperationsInput | string
    options?: TaskUpdateoptionsInput | string[]
    correctAnswer?: TaskUpdatecorrectAnswerInput | string[]
    type?: EnumTaskTypeFieldUpdateOperationsInput | $Enums.TaskType
    testId?: IntFieldUpdateOperationsInput | number
  }

  export type UserTestProgressCreateInput = {
    completed?: boolean
    score?: number | null
    completedAt?: Date | string | null
    user: UserCreateNestedOneWithoutTestProgressInput
    test: TestCreateNestedOneWithoutProgressInput
  }

  export type UserTestProgressUncheckedCreateInput = {
    id?: number
    userId: number
    testId: number
    completed?: boolean
    score?: number | null
    completedAt?: Date | string | null
  }

  export type UserTestProgressUpdateInput = {
    completed?: BoolFieldUpdateOperationsInput | boolean
    score?: NullableIntFieldUpdateOperationsInput | number | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneRequiredWithoutTestProgressNestedInput
    test?: TestUpdateOneRequiredWithoutProgressNestedInput
  }

  export type UserTestProgressUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    testId?: IntFieldUpdateOperationsInput | number
    completed?: BoolFieldUpdateOperationsInput | boolean
    score?: NullableIntFieldUpdateOperationsInput | number | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserTestProgressCreateManyInput = {
    id?: number
    userId: number
    testId: number
    completed?: boolean
    score?: number | null
    completedAt?: Date | string | null
  }

  export type UserTestProgressUpdateManyMutationInput = {
    completed?: BoolFieldUpdateOperationsInput | boolean
    score?: NullableIntFieldUpdateOperationsInput | number | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserTestProgressUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    testId?: IntFieldUpdateOperationsInput | number
    completed?: BoolFieldUpdateOperationsInput | boolean
    score?: NullableIntFieldUpdateOperationsInput | number | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserTaskAnswerCreateInput = {
    answer: string
    isCorrect: boolean
    user: UserCreateNestedOneWithoutUserAnswersInput
    task: TaskCreateNestedOneWithoutUserAnswersInput
  }

  export type UserTaskAnswerUncheckedCreateInput = {
    id?: number
    userId: number
    taskId: number
    answer: string
    isCorrect: boolean
  }

  export type UserTaskAnswerUpdateInput = {
    answer?: StringFieldUpdateOperationsInput | string
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneRequiredWithoutUserAnswersNestedInput
    task?: TaskUpdateOneRequiredWithoutUserAnswersNestedInput
  }

  export type UserTaskAnswerUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    taskId?: IntFieldUpdateOperationsInput | number
    answer?: StringFieldUpdateOperationsInput | string
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserTaskAnswerCreateManyInput = {
    id?: number
    userId: number
    taskId: number
    answer: string
    isCorrect: boolean
  }

  export type UserTaskAnswerUpdateManyMutationInput = {
    answer?: StringFieldUpdateOperationsInput | string
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserTaskAnswerUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    taskId?: IntFieldUpdateOperationsInput | number
    answer?: StringFieldUpdateOperationsInput | string
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
  }

  export type AchievementCreateInput = {
    title: string
    description: string
    iconUrl?: string | null
    type?: $Enums.AchievementType | null
    conditionValue?: number | null
    createdAt?: Date | string
    users?: UserAchievementCreateNestedManyWithoutAchievementInput
  }

  export type AchievementUncheckedCreateInput = {
    id?: number
    title: string
    description: string
    iconUrl?: string | null
    type?: $Enums.AchievementType | null
    conditionValue?: number | null
    createdAt?: Date | string
    users?: UserAchievementUncheckedCreateNestedManyWithoutAchievementInput
  }

  export type AchievementUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    iconUrl?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableEnumAchievementTypeFieldUpdateOperationsInput | $Enums.AchievementType | null
    conditionValue?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserAchievementUpdateManyWithoutAchievementNestedInput
  }

  export type AchievementUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    iconUrl?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableEnumAchievementTypeFieldUpdateOperationsInput | $Enums.AchievementType | null
    conditionValue?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserAchievementUncheckedUpdateManyWithoutAchievementNestedInput
  }

  export type AchievementCreateManyInput = {
    id?: number
    title: string
    description: string
    iconUrl?: string | null
    type?: $Enums.AchievementType | null
    conditionValue?: number | null
    createdAt?: Date | string
  }

  export type AchievementUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    iconUrl?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableEnumAchievementTypeFieldUpdateOperationsInput | $Enums.AchievementType | null
    conditionValue?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AchievementUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    iconUrl?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableEnumAchievementTypeFieldUpdateOperationsInput | $Enums.AchievementType | null
    conditionValue?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserAchievementCreateInput = {
    receivedAt?: Date | string
    user: UserCreateNestedOneWithoutUserAchievementInput
    achievement: AchievementCreateNestedOneWithoutUsersInput
  }

  export type UserAchievementUncheckedCreateInput = {
    id?: number
    userId: number
    achievementId: number
    receivedAt?: Date | string
  }

  export type UserAchievementUpdateInput = {
    receivedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutUserAchievementNestedInput
    achievement?: AchievementUpdateOneRequiredWithoutUsersNestedInput
  }

  export type UserAchievementUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    achievementId?: IntFieldUpdateOperationsInput | number
    receivedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserAchievementCreateManyInput = {
    id?: number
    userId: number
    achievementId: number
    receivedAt?: Date | string
  }

  export type UserAchievementUpdateManyMutationInput = {
    receivedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserAchievementUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    achievementId?: IntFieldUpdateOperationsInput | number
    receivedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WordStatisticCreateInput = {
    word: string
    learnedAt?: Date | string
    user: UserCreateNestedOneWithoutWordStatsInput
  }

  export type WordStatisticUncheckedCreateInput = {
    id?: number
    word: string
    learnedAt?: Date | string
    userId: number
  }

  export type WordStatisticUpdateInput = {
    word?: StringFieldUpdateOperationsInput | string
    learnedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutWordStatsNestedInput
  }

  export type WordStatisticUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    word?: StringFieldUpdateOperationsInput | string
    learnedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type WordStatisticCreateManyInput = {
    id?: number
    word: string
    learnedAt?: Date | string
    userId: number
  }

  export type WordStatisticUpdateManyMutationInput = {
    word?: StringFieldUpdateOperationsInput | string
    learnedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WordStatisticUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    word?: StringFieldUpdateOperationsInput | string
    learnedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type DailyActivityCreateInput = {
    date: Date | string
    isActive?: boolean
    user: UserCreateNestedOneWithoutDailyStatsInput
  }

  export type DailyActivityUncheckedCreateInput = {
    id?: number
    date: Date | string
    isActive?: boolean
    userId: number
  }

  export type DailyActivityUpdateInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneRequiredWithoutDailyStatsNestedInput
  }

  export type DailyActivityUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type DailyActivityCreateManyInput = {
    id?: number
    date: Date | string
    isActive?: boolean
    userId: number
  }

  export type DailyActivityUpdateManyMutationInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type DailyActivityUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type UserTestProgressListRelationFilter = {
    every?: UserTestProgressWhereInput
    some?: UserTestProgressWhereInput
    none?: UserTestProgressWhereInput
  }

  export type UserTaskAnswerListRelationFilter = {
    every?: UserTaskAnswerWhereInput
    some?: UserTaskAnswerWhereInput
    none?: UserTaskAnswerWhereInput
  }

  export type UserAchievementListRelationFilter = {
    every?: UserAchievementWhereInput
    some?: UserAchievementWhereInput
    none?: UserAchievementWhereInput
  }

  export type WordStatisticListRelationFilter = {
    every?: WordStatisticWhereInput
    some?: WordStatisticWhereInput
    none?: WordStatisticWhereInput
  }

  export type DailyActivityListRelationFilter = {
    every?: DailyActivityWhereInput
    some?: DailyActivityWhereInput
    none?: DailyActivityWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UserTestProgressOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserTaskAnswerOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserAchievementOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WordStatisticOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DailyActivityOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    surname?: SortOrder
    birthDate?: SortOrder
    phoneNumber?: SortOrder
    email?: SortOrder
    password?: SortOrder
    avatarUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    hashedRefreshToken?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    surname?: SortOrder
    birthDate?: SortOrder
    phoneNumber?: SortOrder
    email?: SortOrder
    password?: SortOrder
    avatarUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    hashedRefreshToken?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    surname?: SortOrder
    birthDate?: SortOrder
    phoneNumber?: SortOrder
    email?: SortOrder
    password?: SortOrder
    avatarUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    hashedRefreshToken?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumDifficultyFilter<$PrismaModel = never> = {
    equals?: $Enums.Difficulty | EnumDifficultyFieldRefInput<$PrismaModel>
    in?: $Enums.Difficulty[] | ListEnumDifficultyFieldRefInput<$PrismaModel>
    notIn?: $Enums.Difficulty[] | ListEnumDifficultyFieldRefInput<$PrismaModel>
    not?: NestedEnumDifficultyFilter<$PrismaModel> | $Enums.Difficulty
  }

  export type TestListRelationFilter = {
    every?: TestWhereInput
    some?: TestWhereInput
    none?: TestWhereInput
  }

  export type TestOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CourseCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    imageUrl?: SortOrder
    difficulty?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CourseAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CourseMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    imageUrl?: SortOrder
    difficulty?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CourseMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    imageUrl?: SortOrder
    difficulty?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CourseSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EnumDifficultyWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Difficulty | EnumDifficultyFieldRefInput<$PrismaModel>
    in?: $Enums.Difficulty[] | ListEnumDifficultyFieldRefInput<$PrismaModel>
    notIn?: $Enums.Difficulty[] | ListEnumDifficultyFieldRefInput<$PrismaModel>
    not?: NestedEnumDifficultyWithAggregatesFilter<$PrismaModel> | $Enums.Difficulty
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDifficultyFilter<$PrismaModel>
    _max?: NestedEnumDifficultyFilter<$PrismaModel>
  }

  export type CourseScalarRelationFilter = {
    is?: CourseWhereInput
    isNot?: CourseWhereInput
  }

  export type TaskListRelationFilter = {
    every?: TaskWhereInput
    some?: TaskWhereInput
    none?: TaskWhereInput
  }

  export type TaskOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TestCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    courseId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TestAvgOrderByAggregateInput = {
    id?: SortOrder
    courseId?: SortOrder
  }

  export type TestMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    courseId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TestMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    courseId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TestSumOrderByAggregateInput = {
    id?: SortOrder
    courseId?: SortOrder
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type EnumTaskTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.TaskType | EnumTaskTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TaskType[] | ListEnumTaskTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TaskType[] | ListEnumTaskTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTaskTypeFilter<$PrismaModel> | $Enums.TaskType
  }

  export type TestScalarRelationFilter = {
    is?: TestWhereInput
    isNot?: TestWhereInput
  }

  export type TaskCountOrderByAggregateInput = {
    id?: SortOrder
    question?: SortOrder
    options?: SortOrder
    correctAnswer?: SortOrder
    type?: SortOrder
    testId?: SortOrder
  }

  export type TaskAvgOrderByAggregateInput = {
    id?: SortOrder
    testId?: SortOrder
  }

  export type TaskMaxOrderByAggregateInput = {
    id?: SortOrder
    question?: SortOrder
    type?: SortOrder
    testId?: SortOrder
  }

  export type TaskMinOrderByAggregateInput = {
    id?: SortOrder
    question?: SortOrder
    type?: SortOrder
    testId?: SortOrder
  }

  export type TaskSumOrderByAggregateInput = {
    id?: SortOrder
    testId?: SortOrder
  }

  export type EnumTaskTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TaskType | EnumTaskTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TaskType[] | ListEnumTaskTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TaskType[] | ListEnumTaskTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTaskTypeWithAggregatesFilter<$PrismaModel> | $Enums.TaskType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTaskTypeFilter<$PrismaModel>
    _max?: NestedEnumTaskTypeFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type UserTestProgressUserIdTestIdCompoundUniqueInput = {
    userId: number
    testId: number
  }

  export type UserTestProgressCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    testId?: SortOrder
    completed?: SortOrder
    score?: SortOrder
    completedAt?: SortOrder
  }

  export type UserTestProgressAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    testId?: SortOrder
    score?: SortOrder
  }

  export type UserTestProgressMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    testId?: SortOrder
    completed?: SortOrder
    score?: SortOrder
    completedAt?: SortOrder
  }

  export type UserTestProgressMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    testId?: SortOrder
    completed?: SortOrder
    score?: SortOrder
    completedAt?: SortOrder
  }

  export type UserTestProgressSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    testId?: SortOrder
    score?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type TaskScalarRelationFilter = {
    is?: TaskWhereInput
    isNot?: TaskWhereInput
  }

  export type UserTaskAnswerUserIdTaskIdCompoundUniqueInput = {
    userId: number
    taskId: number
  }

  export type UserTaskAnswerCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    taskId?: SortOrder
    answer?: SortOrder
    isCorrect?: SortOrder
  }

  export type UserTaskAnswerAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    taskId?: SortOrder
  }

  export type UserTaskAnswerMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    taskId?: SortOrder
    answer?: SortOrder
    isCorrect?: SortOrder
  }

  export type UserTaskAnswerMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    taskId?: SortOrder
    answer?: SortOrder
    isCorrect?: SortOrder
  }

  export type UserTaskAnswerSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    taskId?: SortOrder
  }

  export type EnumAchievementTypeNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.AchievementType | EnumAchievementTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.AchievementType[] | ListEnumAchievementTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.AchievementType[] | ListEnumAchievementTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumAchievementTypeNullableFilter<$PrismaModel> | $Enums.AchievementType | null
  }

  export type AchievementCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    iconUrl?: SortOrder
    type?: SortOrder
    conditionValue?: SortOrder
    createdAt?: SortOrder
  }

  export type AchievementAvgOrderByAggregateInput = {
    id?: SortOrder
    conditionValue?: SortOrder
  }

  export type AchievementMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    iconUrl?: SortOrder
    type?: SortOrder
    conditionValue?: SortOrder
    createdAt?: SortOrder
  }

  export type AchievementMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    iconUrl?: SortOrder
    type?: SortOrder
    conditionValue?: SortOrder
    createdAt?: SortOrder
  }

  export type AchievementSumOrderByAggregateInput = {
    id?: SortOrder
    conditionValue?: SortOrder
  }

  export type EnumAchievementTypeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AchievementType | EnumAchievementTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.AchievementType[] | ListEnumAchievementTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.AchievementType[] | ListEnumAchievementTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumAchievementTypeNullableWithAggregatesFilter<$PrismaModel> | $Enums.AchievementType | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumAchievementTypeNullableFilter<$PrismaModel>
    _max?: NestedEnumAchievementTypeNullableFilter<$PrismaModel>
  }

  export type AchievementScalarRelationFilter = {
    is?: AchievementWhereInput
    isNot?: AchievementWhereInput
  }

  export type UserAchievementUserIdAchievementIdCompoundUniqueInput = {
    userId: number
    achievementId: number
  }

  export type UserAchievementCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    achievementId?: SortOrder
    receivedAt?: SortOrder
  }

  export type UserAchievementAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    achievementId?: SortOrder
  }

  export type UserAchievementMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    achievementId?: SortOrder
    receivedAt?: SortOrder
  }

  export type UserAchievementMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    achievementId?: SortOrder
    receivedAt?: SortOrder
  }

  export type UserAchievementSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    achievementId?: SortOrder
  }

  export type WordStatisticCountOrderByAggregateInput = {
    id?: SortOrder
    word?: SortOrder
    learnedAt?: SortOrder
    userId?: SortOrder
  }

  export type WordStatisticAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type WordStatisticMaxOrderByAggregateInput = {
    id?: SortOrder
    word?: SortOrder
    learnedAt?: SortOrder
    userId?: SortOrder
  }

  export type WordStatisticMinOrderByAggregateInput = {
    id?: SortOrder
    word?: SortOrder
    learnedAt?: SortOrder
    userId?: SortOrder
  }

  export type WordStatisticSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type DailyActivityUserIdDateCompoundUniqueInput = {
    userId: number
    date: Date | string
  }

  export type DailyActivityCountOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    isActive?: SortOrder
    userId?: SortOrder
  }

  export type DailyActivityAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type DailyActivityMaxOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    isActive?: SortOrder
    userId?: SortOrder
  }

  export type DailyActivityMinOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    isActive?: SortOrder
    userId?: SortOrder
  }

  export type DailyActivitySumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type UserTestProgressCreateNestedManyWithoutUserInput = {
    create?: XOR<UserTestProgressCreateWithoutUserInput, UserTestProgressUncheckedCreateWithoutUserInput> | UserTestProgressCreateWithoutUserInput[] | UserTestProgressUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserTestProgressCreateOrConnectWithoutUserInput | UserTestProgressCreateOrConnectWithoutUserInput[]
    createMany?: UserTestProgressCreateManyUserInputEnvelope
    connect?: UserTestProgressWhereUniqueInput | UserTestProgressWhereUniqueInput[]
  }

  export type UserTaskAnswerCreateNestedManyWithoutUserInput = {
    create?: XOR<UserTaskAnswerCreateWithoutUserInput, UserTaskAnswerUncheckedCreateWithoutUserInput> | UserTaskAnswerCreateWithoutUserInput[] | UserTaskAnswerUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserTaskAnswerCreateOrConnectWithoutUserInput | UserTaskAnswerCreateOrConnectWithoutUserInput[]
    createMany?: UserTaskAnswerCreateManyUserInputEnvelope
    connect?: UserTaskAnswerWhereUniqueInput | UserTaskAnswerWhereUniqueInput[]
  }

  export type UserAchievementCreateNestedManyWithoutUserInput = {
    create?: XOR<UserAchievementCreateWithoutUserInput, UserAchievementUncheckedCreateWithoutUserInput> | UserAchievementCreateWithoutUserInput[] | UserAchievementUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserAchievementCreateOrConnectWithoutUserInput | UserAchievementCreateOrConnectWithoutUserInput[]
    createMany?: UserAchievementCreateManyUserInputEnvelope
    connect?: UserAchievementWhereUniqueInput | UserAchievementWhereUniqueInput[]
  }

  export type WordStatisticCreateNestedManyWithoutUserInput = {
    create?: XOR<WordStatisticCreateWithoutUserInput, WordStatisticUncheckedCreateWithoutUserInput> | WordStatisticCreateWithoutUserInput[] | WordStatisticUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WordStatisticCreateOrConnectWithoutUserInput | WordStatisticCreateOrConnectWithoutUserInput[]
    createMany?: WordStatisticCreateManyUserInputEnvelope
    connect?: WordStatisticWhereUniqueInput | WordStatisticWhereUniqueInput[]
  }

  export type DailyActivityCreateNestedManyWithoutUserInput = {
    create?: XOR<DailyActivityCreateWithoutUserInput, DailyActivityUncheckedCreateWithoutUserInput> | DailyActivityCreateWithoutUserInput[] | DailyActivityUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DailyActivityCreateOrConnectWithoutUserInput | DailyActivityCreateOrConnectWithoutUserInput[]
    createMany?: DailyActivityCreateManyUserInputEnvelope
    connect?: DailyActivityWhereUniqueInput | DailyActivityWhereUniqueInput[]
  }

  export type UserTestProgressUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserTestProgressCreateWithoutUserInput, UserTestProgressUncheckedCreateWithoutUserInput> | UserTestProgressCreateWithoutUserInput[] | UserTestProgressUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserTestProgressCreateOrConnectWithoutUserInput | UserTestProgressCreateOrConnectWithoutUserInput[]
    createMany?: UserTestProgressCreateManyUserInputEnvelope
    connect?: UserTestProgressWhereUniqueInput | UserTestProgressWhereUniqueInput[]
  }

  export type UserTaskAnswerUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserTaskAnswerCreateWithoutUserInput, UserTaskAnswerUncheckedCreateWithoutUserInput> | UserTaskAnswerCreateWithoutUserInput[] | UserTaskAnswerUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserTaskAnswerCreateOrConnectWithoutUserInput | UserTaskAnswerCreateOrConnectWithoutUserInput[]
    createMany?: UserTaskAnswerCreateManyUserInputEnvelope
    connect?: UserTaskAnswerWhereUniqueInput | UserTaskAnswerWhereUniqueInput[]
  }

  export type UserAchievementUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserAchievementCreateWithoutUserInput, UserAchievementUncheckedCreateWithoutUserInput> | UserAchievementCreateWithoutUserInput[] | UserAchievementUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserAchievementCreateOrConnectWithoutUserInput | UserAchievementCreateOrConnectWithoutUserInput[]
    createMany?: UserAchievementCreateManyUserInputEnvelope
    connect?: UserAchievementWhereUniqueInput | UserAchievementWhereUniqueInput[]
  }

  export type WordStatisticUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<WordStatisticCreateWithoutUserInput, WordStatisticUncheckedCreateWithoutUserInput> | WordStatisticCreateWithoutUserInput[] | WordStatisticUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WordStatisticCreateOrConnectWithoutUserInput | WordStatisticCreateOrConnectWithoutUserInput[]
    createMany?: WordStatisticCreateManyUserInputEnvelope
    connect?: WordStatisticWhereUniqueInput | WordStatisticWhereUniqueInput[]
  }

  export type DailyActivityUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<DailyActivityCreateWithoutUserInput, DailyActivityUncheckedCreateWithoutUserInput> | DailyActivityCreateWithoutUserInput[] | DailyActivityUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DailyActivityCreateOrConnectWithoutUserInput | DailyActivityCreateOrConnectWithoutUserInput[]
    createMany?: DailyActivityCreateManyUserInputEnvelope
    connect?: DailyActivityWhereUniqueInput | DailyActivityWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type UserTestProgressUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserTestProgressCreateWithoutUserInput, UserTestProgressUncheckedCreateWithoutUserInput> | UserTestProgressCreateWithoutUserInput[] | UserTestProgressUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserTestProgressCreateOrConnectWithoutUserInput | UserTestProgressCreateOrConnectWithoutUserInput[]
    upsert?: UserTestProgressUpsertWithWhereUniqueWithoutUserInput | UserTestProgressUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserTestProgressCreateManyUserInputEnvelope
    set?: UserTestProgressWhereUniqueInput | UserTestProgressWhereUniqueInput[]
    disconnect?: UserTestProgressWhereUniqueInput | UserTestProgressWhereUniqueInput[]
    delete?: UserTestProgressWhereUniqueInput | UserTestProgressWhereUniqueInput[]
    connect?: UserTestProgressWhereUniqueInput | UserTestProgressWhereUniqueInput[]
    update?: UserTestProgressUpdateWithWhereUniqueWithoutUserInput | UserTestProgressUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserTestProgressUpdateManyWithWhereWithoutUserInput | UserTestProgressUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserTestProgressScalarWhereInput | UserTestProgressScalarWhereInput[]
  }

  export type UserTaskAnswerUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserTaskAnswerCreateWithoutUserInput, UserTaskAnswerUncheckedCreateWithoutUserInput> | UserTaskAnswerCreateWithoutUserInput[] | UserTaskAnswerUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserTaskAnswerCreateOrConnectWithoutUserInput | UserTaskAnswerCreateOrConnectWithoutUserInput[]
    upsert?: UserTaskAnswerUpsertWithWhereUniqueWithoutUserInput | UserTaskAnswerUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserTaskAnswerCreateManyUserInputEnvelope
    set?: UserTaskAnswerWhereUniqueInput | UserTaskAnswerWhereUniqueInput[]
    disconnect?: UserTaskAnswerWhereUniqueInput | UserTaskAnswerWhereUniqueInput[]
    delete?: UserTaskAnswerWhereUniqueInput | UserTaskAnswerWhereUniqueInput[]
    connect?: UserTaskAnswerWhereUniqueInput | UserTaskAnswerWhereUniqueInput[]
    update?: UserTaskAnswerUpdateWithWhereUniqueWithoutUserInput | UserTaskAnswerUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserTaskAnswerUpdateManyWithWhereWithoutUserInput | UserTaskAnswerUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserTaskAnswerScalarWhereInput | UserTaskAnswerScalarWhereInput[]
  }

  export type UserAchievementUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserAchievementCreateWithoutUserInput, UserAchievementUncheckedCreateWithoutUserInput> | UserAchievementCreateWithoutUserInput[] | UserAchievementUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserAchievementCreateOrConnectWithoutUserInput | UserAchievementCreateOrConnectWithoutUserInput[]
    upsert?: UserAchievementUpsertWithWhereUniqueWithoutUserInput | UserAchievementUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserAchievementCreateManyUserInputEnvelope
    set?: UserAchievementWhereUniqueInput | UserAchievementWhereUniqueInput[]
    disconnect?: UserAchievementWhereUniqueInput | UserAchievementWhereUniqueInput[]
    delete?: UserAchievementWhereUniqueInput | UserAchievementWhereUniqueInput[]
    connect?: UserAchievementWhereUniqueInput | UserAchievementWhereUniqueInput[]
    update?: UserAchievementUpdateWithWhereUniqueWithoutUserInput | UserAchievementUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserAchievementUpdateManyWithWhereWithoutUserInput | UserAchievementUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserAchievementScalarWhereInput | UserAchievementScalarWhereInput[]
  }

  export type WordStatisticUpdateManyWithoutUserNestedInput = {
    create?: XOR<WordStatisticCreateWithoutUserInput, WordStatisticUncheckedCreateWithoutUserInput> | WordStatisticCreateWithoutUserInput[] | WordStatisticUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WordStatisticCreateOrConnectWithoutUserInput | WordStatisticCreateOrConnectWithoutUserInput[]
    upsert?: WordStatisticUpsertWithWhereUniqueWithoutUserInput | WordStatisticUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: WordStatisticCreateManyUserInputEnvelope
    set?: WordStatisticWhereUniqueInput | WordStatisticWhereUniqueInput[]
    disconnect?: WordStatisticWhereUniqueInput | WordStatisticWhereUniqueInput[]
    delete?: WordStatisticWhereUniqueInput | WordStatisticWhereUniqueInput[]
    connect?: WordStatisticWhereUniqueInput | WordStatisticWhereUniqueInput[]
    update?: WordStatisticUpdateWithWhereUniqueWithoutUserInput | WordStatisticUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: WordStatisticUpdateManyWithWhereWithoutUserInput | WordStatisticUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: WordStatisticScalarWhereInput | WordStatisticScalarWhereInput[]
  }

  export type DailyActivityUpdateManyWithoutUserNestedInput = {
    create?: XOR<DailyActivityCreateWithoutUserInput, DailyActivityUncheckedCreateWithoutUserInput> | DailyActivityCreateWithoutUserInput[] | DailyActivityUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DailyActivityCreateOrConnectWithoutUserInput | DailyActivityCreateOrConnectWithoutUserInput[]
    upsert?: DailyActivityUpsertWithWhereUniqueWithoutUserInput | DailyActivityUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: DailyActivityCreateManyUserInputEnvelope
    set?: DailyActivityWhereUniqueInput | DailyActivityWhereUniqueInput[]
    disconnect?: DailyActivityWhereUniqueInput | DailyActivityWhereUniqueInput[]
    delete?: DailyActivityWhereUniqueInput | DailyActivityWhereUniqueInput[]
    connect?: DailyActivityWhereUniqueInput | DailyActivityWhereUniqueInput[]
    update?: DailyActivityUpdateWithWhereUniqueWithoutUserInput | DailyActivityUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: DailyActivityUpdateManyWithWhereWithoutUserInput | DailyActivityUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: DailyActivityScalarWhereInput | DailyActivityScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserTestProgressUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserTestProgressCreateWithoutUserInput, UserTestProgressUncheckedCreateWithoutUserInput> | UserTestProgressCreateWithoutUserInput[] | UserTestProgressUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserTestProgressCreateOrConnectWithoutUserInput | UserTestProgressCreateOrConnectWithoutUserInput[]
    upsert?: UserTestProgressUpsertWithWhereUniqueWithoutUserInput | UserTestProgressUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserTestProgressCreateManyUserInputEnvelope
    set?: UserTestProgressWhereUniqueInput | UserTestProgressWhereUniqueInput[]
    disconnect?: UserTestProgressWhereUniqueInput | UserTestProgressWhereUniqueInput[]
    delete?: UserTestProgressWhereUniqueInput | UserTestProgressWhereUniqueInput[]
    connect?: UserTestProgressWhereUniqueInput | UserTestProgressWhereUniqueInput[]
    update?: UserTestProgressUpdateWithWhereUniqueWithoutUserInput | UserTestProgressUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserTestProgressUpdateManyWithWhereWithoutUserInput | UserTestProgressUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserTestProgressScalarWhereInput | UserTestProgressScalarWhereInput[]
  }

  export type UserTaskAnswerUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserTaskAnswerCreateWithoutUserInput, UserTaskAnswerUncheckedCreateWithoutUserInput> | UserTaskAnswerCreateWithoutUserInput[] | UserTaskAnswerUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserTaskAnswerCreateOrConnectWithoutUserInput | UserTaskAnswerCreateOrConnectWithoutUserInput[]
    upsert?: UserTaskAnswerUpsertWithWhereUniqueWithoutUserInput | UserTaskAnswerUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserTaskAnswerCreateManyUserInputEnvelope
    set?: UserTaskAnswerWhereUniqueInput | UserTaskAnswerWhereUniqueInput[]
    disconnect?: UserTaskAnswerWhereUniqueInput | UserTaskAnswerWhereUniqueInput[]
    delete?: UserTaskAnswerWhereUniqueInput | UserTaskAnswerWhereUniqueInput[]
    connect?: UserTaskAnswerWhereUniqueInput | UserTaskAnswerWhereUniqueInput[]
    update?: UserTaskAnswerUpdateWithWhereUniqueWithoutUserInput | UserTaskAnswerUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserTaskAnswerUpdateManyWithWhereWithoutUserInput | UserTaskAnswerUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserTaskAnswerScalarWhereInput | UserTaskAnswerScalarWhereInput[]
  }

  export type UserAchievementUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserAchievementCreateWithoutUserInput, UserAchievementUncheckedCreateWithoutUserInput> | UserAchievementCreateWithoutUserInput[] | UserAchievementUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserAchievementCreateOrConnectWithoutUserInput | UserAchievementCreateOrConnectWithoutUserInput[]
    upsert?: UserAchievementUpsertWithWhereUniqueWithoutUserInput | UserAchievementUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserAchievementCreateManyUserInputEnvelope
    set?: UserAchievementWhereUniqueInput | UserAchievementWhereUniqueInput[]
    disconnect?: UserAchievementWhereUniqueInput | UserAchievementWhereUniqueInput[]
    delete?: UserAchievementWhereUniqueInput | UserAchievementWhereUniqueInput[]
    connect?: UserAchievementWhereUniqueInput | UserAchievementWhereUniqueInput[]
    update?: UserAchievementUpdateWithWhereUniqueWithoutUserInput | UserAchievementUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserAchievementUpdateManyWithWhereWithoutUserInput | UserAchievementUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserAchievementScalarWhereInput | UserAchievementScalarWhereInput[]
  }

  export type WordStatisticUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<WordStatisticCreateWithoutUserInput, WordStatisticUncheckedCreateWithoutUserInput> | WordStatisticCreateWithoutUserInput[] | WordStatisticUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WordStatisticCreateOrConnectWithoutUserInput | WordStatisticCreateOrConnectWithoutUserInput[]
    upsert?: WordStatisticUpsertWithWhereUniqueWithoutUserInput | WordStatisticUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: WordStatisticCreateManyUserInputEnvelope
    set?: WordStatisticWhereUniqueInput | WordStatisticWhereUniqueInput[]
    disconnect?: WordStatisticWhereUniqueInput | WordStatisticWhereUniqueInput[]
    delete?: WordStatisticWhereUniqueInput | WordStatisticWhereUniqueInput[]
    connect?: WordStatisticWhereUniqueInput | WordStatisticWhereUniqueInput[]
    update?: WordStatisticUpdateWithWhereUniqueWithoutUserInput | WordStatisticUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: WordStatisticUpdateManyWithWhereWithoutUserInput | WordStatisticUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: WordStatisticScalarWhereInput | WordStatisticScalarWhereInput[]
  }

  export type DailyActivityUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<DailyActivityCreateWithoutUserInput, DailyActivityUncheckedCreateWithoutUserInput> | DailyActivityCreateWithoutUserInput[] | DailyActivityUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DailyActivityCreateOrConnectWithoutUserInput | DailyActivityCreateOrConnectWithoutUserInput[]
    upsert?: DailyActivityUpsertWithWhereUniqueWithoutUserInput | DailyActivityUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: DailyActivityCreateManyUserInputEnvelope
    set?: DailyActivityWhereUniqueInput | DailyActivityWhereUniqueInput[]
    disconnect?: DailyActivityWhereUniqueInput | DailyActivityWhereUniqueInput[]
    delete?: DailyActivityWhereUniqueInput | DailyActivityWhereUniqueInput[]
    connect?: DailyActivityWhereUniqueInput | DailyActivityWhereUniqueInput[]
    update?: DailyActivityUpdateWithWhereUniqueWithoutUserInput | DailyActivityUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: DailyActivityUpdateManyWithWhereWithoutUserInput | DailyActivityUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: DailyActivityScalarWhereInput | DailyActivityScalarWhereInput[]
  }

  export type TestCreateNestedManyWithoutCourseInput = {
    create?: XOR<TestCreateWithoutCourseInput, TestUncheckedCreateWithoutCourseInput> | TestCreateWithoutCourseInput[] | TestUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: TestCreateOrConnectWithoutCourseInput | TestCreateOrConnectWithoutCourseInput[]
    createMany?: TestCreateManyCourseInputEnvelope
    connect?: TestWhereUniqueInput | TestWhereUniqueInput[]
  }

  export type TestUncheckedCreateNestedManyWithoutCourseInput = {
    create?: XOR<TestCreateWithoutCourseInput, TestUncheckedCreateWithoutCourseInput> | TestCreateWithoutCourseInput[] | TestUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: TestCreateOrConnectWithoutCourseInput | TestCreateOrConnectWithoutCourseInput[]
    createMany?: TestCreateManyCourseInputEnvelope
    connect?: TestWhereUniqueInput | TestWhereUniqueInput[]
  }

  export type EnumDifficultyFieldUpdateOperationsInput = {
    set?: $Enums.Difficulty
  }

  export type TestUpdateManyWithoutCourseNestedInput = {
    create?: XOR<TestCreateWithoutCourseInput, TestUncheckedCreateWithoutCourseInput> | TestCreateWithoutCourseInput[] | TestUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: TestCreateOrConnectWithoutCourseInput | TestCreateOrConnectWithoutCourseInput[]
    upsert?: TestUpsertWithWhereUniqueWithoutCourseInput | TestUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: TestCreateManyCourseInputEnvelope
    set?: TestWhereUniqueInput | TestWhereUniqueInput[]
    disconnect?: TestWhereUniqueInput | TestWhereUniqueInput[]
    delete?: TestWhereUniqueInput | TestWhereUniqueInput[]
    connect?: TestWhereUniqueInput | TestWhereUniqueInput[]
    update?: TestUpdateWithWhereUniqueWithoutCourseInput | TestUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: TestUpdateManyWithWhereWithoutCourseInput | TestUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: TestScalarWhereInput | TestScalarWhereInput[]
  }

  export type TestUncheckedUpdateManyWithoutCourseNestedInput = {
    create?: XOR<TestCreateWithoutCourseInput, TestUncheckedCreateWithoutCourseInput> | TestCreateWithoutCourseInput[] | TestUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: TestCreateOrConnectWithoutCourseInput | TestCreateOrConnectWithoutCourseInput[]
    upsert?: TestUpsertWithWhereUniqueWithoutCourseInput | TestUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: TestCreateManyCourseInputEnvelope
    set?: TestWhereUniqueInput | TestWhereUniqueInput[]
    disconnect?: TestWhereUniqueInput | TestWhereUniqueInput[]
    delete?: TestWhereUniqueInput | TestWhereUniqueInput[]
    connect?: TestWhereUniqueInput | TestWhereUniqueInput[]
    update?: TestUpdateWithWhereUniqueWithoutCourseInput | TestUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: TestUpdateManyWithWhereWithoutCourseInput | TestUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: TestScalarWhereInput | TestScalarWhereInput[]
  }

  export type CourseCreateNestedOneWithoutTestsInput = {
    create?: XOR<CourseCreateWithoutTestsInput, CourseUncheckedCreateWithoutTestsInput>
    connectOrCreate?: CourseCreateOrConnectWithoutTestsInput
    connect?: CourseWhereUniqueInput
  }

  export type TaskCreateNestedManyWithoutTestInput = {
    create?: XOR<TaskCreateWithoutTestInput, TaskUncheckedCreateWithoutTestInput> | TaskCreateWithoutTestInput[] | TaskUncheckedCreateWithoutTestInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutTestInput | TaskCreateOrConnectWithoutTestInput[]
    createMany?: TaskCreateManyTestInputEnvelope
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
  }

  export type UserTestProgressCreateNestedManyWithoutTestInput = {
    create?: XOR<UserTestProgressCreateWithoutTestInput, UserTestProgressUncheckedCreateWithoutTestInput> | UserTestProgressCreateWithoutTestInput[] | UserTestProgressUncheckedCreateWithoutTestInput[]
    connectOrCreate?: UserTestProgressCreateOrConnectWithoutTestInput | UserTestProgressCreateOrConnectWithoutTestInput[]
    createMany?: UserTestProgressCreateManyTestInputEnvelope
    connect?: UserTestProgressWhereUniqueInput | UserTestProgressWhereUniqueInput[]
  }

  export type TaskUncheckedCreateNestedManyWithoutTestInput = {
    create?: XOR<TaskCreateWithoutTestInput, TaskUncheckedCreateWithoutTestInput> | TaskCreateWithoutTestInput[] | TaskUncheckedCreateWithoutTestInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutTestInput | TaskCreateOrConnectWithoutTestInput[]
    createMany?: TaskCreateManyTestInputEnvelope
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
  }

  export type UserTestProgressUncheckedCreateNestedManyWithoutTestInput = {
    create?: XOR<UserTestProgressCreateWithoutTestInput, UserTestProgressUncheckedCreateWithoutTestInput> | UserTestProgressCreateWithoutTestInput[] | UserTestProgressUncheckedCreateWithoutTestInput[]
    connectOrCreate?: UserTestProgressCreateOrConnectWithoutTestInput | UserTestProgressCreateOrConnectWithoutTestInput[]
    createMany?: UserTestProgressCreateManyTestInputEnvelope
    connect?: UserTestProgressWhereUniqueInput | UserTestProgressWhereUniqueInput[]
  }

  export type CourseUpdateOneRequiredWithoutTestsNestedInput = {
    create?: XOR<CourseCreateWithoutTestsInput, CourseUncheckedCreateWithoutTestsInput>
    connectOrCreate?: CourseCreateOrConnectWithoutTestsInput
    upsert?: CourseUpsertWithoutTestsInput
    connect?: CourseWhereUniqueInput
    update?: XOR<XOR<CourseUpdateToOneWithWhereWithoutTestsInput, CourseUpdateWithoutTestsInput>, CourseUncheckedUpdateWithoutTestsInput>
  }

  export type TaskUpdateManyWithoutTestNestedInput = {
    create?: XOR<TaskCreateWithoutTestInput, TaskUncheckedCreateWithoutTestInput> | TaskCreateWithoutTestInput[] | TaskUncheckedCreateWithoutTestInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutTestInput | TaskCreateOrConnectWithoutTestInput[]
    upsert?: TaskUpsertWithWhereUniqueWithoutTestInput | TaskUpsertWithWhereUniqueWithoutTestInput[]
    createMany?: TaskCreateManyTestInputEnvelope
    set?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    disconnect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    delete?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    update?: TaskUpdateWithWhereUniqueWithoutTestInput | TaskUpdateWithWhereUniqueWithoutTestInput[]
    updateMany?: TaskUpdateManyWithWhereWithoutTestInput | TaskUpdateManyWithWhereWithoutTestInput[]
    deleteMany?: TaskScalarWhereInput | TaskScalarWhereInput[]
  }

  export type UserTestProgressUpdateManyWithoutTestNestedInput = {
    create?: XOR<UserTestProgressCreateWithoutTestInput, UserTestProgressUncheckedCreateWithoutTestInput> | UserTestProgressCreateWithoutTestInput[] | UserTestProgressUncheckedCreateWithoutTestInput[]
    connectOrCreate?: UserTestProgressCreateOrConnectWithoutTestInput | UserTestProgressCreateOrConnectWithoutTestInput[]
    upsert?: UserTestProgressUpsertWithWhereUniqueWithoutTestInput | UserTestProgressUpsertWithWhereUniqueWithoutTestInput[]
    createMany?: UserTestProgressCreateManyTestInputEnvelope
    set?: UserTestProgressWhereUniqueInput | UserTestProgressWhereUniqueInput[]
    disconnect?: UserTestProgressWhereUniqueInput | UserTestProgressWhereUniqueInput[]
    delete?: UserTestProgressWhereUniqueInput | UserTestProgressWhereUniqueInput[]
    connect?: UserTestProgressWhereUniqueInput | UserTestProgressWhereUniqueInput[]
    update?: UserTestProgressUpdateWithWhereUniqueWithoutTestInput | UserTestProgressUpdateWithWhereUniqueWithoutTestInput[]
    updateMany?: UserTestProgressUpdateManyWithWhereWithoutTestInput | UserTestProgressUpdateManyWithWhereWithoutTestInput[]
    deleteMany?: UserTestProgressScalarWhereInput | UserTestProgressScalarWhereInput[]
  }

  export type TaskUncheckedUpdateManyWithoutTestNestedInput = {
    create?: XOR<TaskCreateWithoutTestInput, TaskUncheckedCreateWithoutTestInput> | TaskCreateWithoutTestInput[] | TaskUncheckedCreateWithoutTestInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutTestInput | TaskCreateOrConnectWithoutTestInput[]
    upsert?: TaskUpsertWithWhereUniqueWithoutTestInput | TaskUpsertWithWhereUniqueWithoutTestInput[]
    createMany?: TaskCreateManyTestInputEnvelope
    set?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    disconnect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    delete?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    update?: TaskUpdateWithWhereUniqueWithoutTestInput | TaskUpdateWithWhereUniqueWithoutTestInput[]
    updateMany?: TaskUpdateManyWithWhereWithoutTestInput | TaskUpdateManyWithWhereWithoutTestInput[]
    deleteMany?: TaskScalarWhereInput | TaskScalarWhereInput[]
  }

  export type UserTestProgressUncheckedUpdateManyWithoutTestNestedInput = {
    create?: XOR<UserTestProgressCreateWithoutTestInput, UserTestProgressUncheckedCreateWithoutTestInput> | UserTestProgressCreateWithoutTestInput[] | UserTestProgressUncheckedCreateWithoutTestInput[]
    connectOrCreate?: UserTestProgressCreateOrConnectWithoutTestInput | UserTestProgressCreateOrConnectWithoutTestInput[]
    upsert?: UserTestProgressUpsertWithWhereUniqueWithoutTestInput | UserTestProgressUpsertWithWhereUniqueWithoutTestInput[]
    createMany?: UserTestProgressCreateManyTestInputEnvelope
    set?: UserTestProgressWhereUniqueInput | UserTestProgressWhereUniqueInput[]
    disconnect?: UserTestProgressWhereUniqueInput | UserTestProgressWhereUniqueInput[]
    delete?: UserTestProgressWhereUniqueInput | UserTestProgressWhereUniqueInput[]
    connect?: UserTestProgressWhereUniqueInput | UserTestProgressWhereUniqueInput[]
    update?: UserTestProgressUpdateWithWhereUniqueWithoutTestInput | UserTestProgressUpdateWithWhereUniqueWithoutTestInput[]
    updateMany?: UserTestProgressUpdateManyWithWhereWithoutTestInput | UserTestProgressUpdateManyWithWhereWithoutTestInput[]
    deleteMany?: UserTestProgressScalarWhereInput | UserTestProgressScalarWhereInput[]
  }

  export type TaskCreateoptionsInput = {
    set: string[]
  }

  export type TaskCreatecorrectAnswerInput = {
    set: string[]
  }

  export type TestCreateNestedOneWithoutTasksInput = {
    create?: XOR<TestCreateWithoutTasksInput, TestUncheckedCreateWithoutTasksInput>
    connectOrCreate?: TestCreateOrConnectWithoutTasksInput
    connect?: TestWhereUniqueInput
  }

  export type UserTaskAnswerCreateNestedManyWithoutTaskInput = {
    create?: XOR<UserTaskAnswerCreateWithoutTaskInput, UserTaskAnswerUncheckedCreateWithoutTaskInput> | UserTaskAnswerCreateWithoutTaskInput[] | UserTaskAnswerUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: UserTaskAnswerCreateOrConnectWithoutTaskInput | UserTaskAnswerCreateOrConnectWithoutTaskInput[]
    createMany?: UserTaskAnswerCreateManyTaskInputEnvelope
    connect?: UserTaskAnswerWhereUniqueInput | UserTaskAnswerWhereUniqueInput[]
  }

  export type UserTaskAnswerUncheckedCreateNestedManyWithoutTaskInput = {
    create?: XOR<UserTaskAnswerCreateWithoutTaskInput, UserTaskAnswerUncheckedCreateWithoutTaskInput> | UserTaskAnswerCreateWithoutTaskInput[] | UserTaskAnswerUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: UserTaskAnswerCreateOrConnectWithoutTaskInput | UserTaskAnswerCreateOrConnectWithoutTaskInput[]
    createMany?: UserTaskAnswerCreateManyTaskInputEnvelope
    connect?: UserTaskAnswerWhereUniqueInput | UserTaskAnswerWhereUniqueInput[]
  }

  export type TaskUpdateoptionsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type TaskUpdatecorrectAnswerInput = {
    set?: string[]
    push?: string | string[]
  }

  export type EnumTaskTypeFieldUpdateOperationsInput = {
    set?: $Enums.TaskType
  }

  export type TestUpdateOneRequiredWithoutTasksNestedInput = {
    create?: XOR<TestCreateWithoutTasksInput, TestUncheckedCreateWithoutTasksInput>
    connectOrCreate?: TestCreateOrConnectWithoutTasksInput
    upsert?: TestUpsertWithoutTasksInput
    connect?: TestWhereUniqueInput
    update?: XOR<XOR<TestUpdateToOneWithWhereWithoutTasksInput, TestUpdateWithoutTasksInput>, TestUncheckedUpdateWithoutTasksInput>
  }

  export type UserTaskAnswerUpdateManyWithoutTaskNestedInput = {
    create?: XOR<UserTaskAnswerCreateWithoutTaskInput, UserTaskAnswerUncheckedCreateWithoutTaskInput> | UserTaskAnswerCreateWithoutTaskInput[] | UserTaskAnswerUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: UserTaskAnswerCreateOrConnectWithoutTaskInput | UserTaskAnswerCreateOrConnectWithoutTaskInput[]
    upsert?: UserTaskAnswerUpsertWithWhereUniqueWithoutTaskInput | UserTaskAnswerUpsertWithWhereUniqueWithoutTaskInput[]
    createMany?: UserTaskAnswerCreateManyTaskInputEnvelope
    set?: UserTaskAnswerWhereUniqueInput | UserTaskAnswerWhereUniqueInput[]
    disconnect?: UserTaskAnswerWhereUniqueInput | UserTaskAnswerWhereUniqueInput[]
    delete?: UserTaskAnswerWhereUniqueInput | UserTaskAnswerWhereUniqueInput[]
    connect?: UserTaskAnswerWhereUniqueInput | UserTaskAnswerWhereUniqueInput[]
    update?: UserTaskAnswerUpdateWithWhereUniqueWithoutTaskInput | UserTaskAnswerUpdateWithWhereUniqueWithoutTaskInput[]
    updateMany?: UserTaskAnswerUpdateManyWithWhereWithoutTaskInput | UserTaskAnswerUpdateManyWithWhereWithoutTaskInput[]
    deleteMany?: UserTaskAnswerScalarWhereInput | UserTaskAnswerScalarWhereInput[]
  }

  export type UserTaskAnswerUncheckedUpdateManyWithoutTaskNestedInput = {
    create?: XOR<UserTaskAnswerCreateWithoutTaskInput, UserTaskAnswerUncheckedCreateWithoutTaskInput> | UserTaskAnswerCreateWithoutTaskInput[] | UserTaskAnswerUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: UserTaskAnswerCreateOrConnectWithoutTaskInput | UserTaskAnswerCreateOrConnectWithoutTaskInput[]
    upsert?: UserTaskAnswerUpsertWithWhereUniqueWithoutTaskInput | UserTaskAnswerUpsertWithWhereUniqueWithoutTaskInput[]
    createMany?: UserTaskAnswerCreateManyTaskInputEnvelope
    set?: UserTaskAnswerWhereUniqueInput | UserTaskAnswerWhereUniqueInput[]
    disconnect?: UserTaskAnswerWhereUniqueInput | UserTaskAnswerWhereUniqueInput[]
    delete?: UserTaskAnswerWhereUniqueInput | UserTaskAnswerWhereUniqueInput[]
    connect?: UserTaskAnswerWhereUniqueInput | UserTaskAnswerWhereUniqueInput[]
    update?: UserTaskAnswerUpdateWithWhereUniqueWithoutTaskInput | UserTaskAnswerUpdateWithWhereUniqueWithoutTaskInput[]
    updateMany?: UserTaskAnswerUpdateManyWithWhereWithoutTaskInput | UserTaskAnswerUpdateManyWithWhereWithoutTaskInput[]
    deleteMany?: UserTaskAnswerScalarWhereInput | UserTaskAnswerScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutTestProgressInput = {
    create?: XOR<UserCreateWithoutTestProgressInput, UserUncheckedCreateWithoutTestProgressInput>
    connectOrCreate?: UserCreateOrConnectWithoutTestProgressInput
    connect?: UserWhereUniqueInput
  }

  export type TestCreateNestedOneWithoutProgressInput = {
    create?: XOR<TestCreateWithoutProgressInput, TestUncheckedCreateWithoutProgressInput>
    connectOrCreate?: TestCreateOrConnectWithoutProgressInput
    connect?: TestWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type UserUpdateOneRequiredWithoutTestProgressNestedInput = {
    create?: XOR<UserCreateWithoutTestProgressInput, UserUncheckedCreateWithoutTestProgressInput>
    connectOrCreate?: UserCreateOrConnectWithoutTestProgressInput
    upsert?: UserUpsertWithoutTestProgressInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTestProgressInput, UserUpdateWithoutTestProgressInput>, UserUncheckedUpdateWithoutTestProgressInput>
  }

  export type TestUpdateOneRequiredWithoutProgressNestedInput = {
    create?: XOR<TestCreateWithoutProgressInput, TestUncheckedCreateWithoutProgressInput>
    connectOrCreate?: TestCreateOrConnectWithoutProgressInput
    upsert?: TestUpsertWithoutProgressInput
    connect?: TestWhereUniqueInput
    update?: XOR<XOR<TestUpdateToOneWithWhereWithoutProgressInput, TestUpdateWithoutProgressInput>, TestUncheckedUpdateWithoutProgressInput>
  }

  export type UserCreateNestedOneWithoutUserAnswersInput = {
    create?: XOR<UserCreateWithoutUserAnswersInput, UserUncheckedCreateWithoutUserAnswersInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserAnswersInput
    connect?: UserWhereUniqueInput
  }

  export type TaskCreateNestedOneWithoutUserAnswersInput = {
    create?: XOR<TaskCreateWithoutUserAnswersInput, TaskUncheckedCreateWithoutUserAnswersInput>
    connectOrCreate?: TaskCreateOrConnectWithoutUserAnswersInput
    connect?: TaskWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutUserAnswersNestedInput = {
    create?: XOR<UserCreateWithoutUserAnswersInput, UserUncheckedCreateWithoutUserAnswersInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserAnswersInput
    upsert?: UserUpsertWithoutUserAnswersInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutUserAnswersInput, UserUpdateWithoutUserAnswersInput>, UserUncheckedUpdateWithoutUserAnswersInput>
  }

  export type TaskUpdateOneRequiredWithoutUserAnswersNestedInput = {
    create?: XOR<TaskCreateWithoutUserAnswersInput, TaskUncheckedCreateWithoutUserAnswersInput>
    connectOrCreate?: TaskCreateOrConnectWithoutUserAnswersInput
    upsert?: TaskUpsertWithoutUserAnswersInput
    connect?: TaskWhereUniqueInput
    update?: XOR<XOR<TaskUpdateToOneWithWhereWithoutUserAnswersInput, TaskUpdateWithoutUserAnswersInput>, TaskUncheckedUpdateWithoutUserAnswersInput>
  }

  export type UserAchievementCreateNestedManyWithoutAchievementInput = {
    create?: XOR<UserAchievementCreateWithoutAchievementInput, UserAchievementUncheckedCreateWithoutAchievementInput> | UserAchievementCreateWithoutAchievementInput[] | UserAchievementUncheckedCreateWithoutAchievementInput[]
    connectOrCreate?: UserAchievementCreateOrConnectWithoutAchievementInput | UserAchievementCreateOrConnectWithoutAchievementInput[]
    createMany?: UserAchievementCreateManyAchievementInputEnvelope
    connect?: UserAchievementWhereUniqueInput | UserAchievementWhereUniqueInput[]
  }

  export type UserAchievementUncheckedCreateNestedManyWithoutAchievementInput = {
    create?: XOR<UserAchievementCreateWithoutAchievementInput, UserAchievementUncheckedCreateWithoutAchievementInput> | UserAchievementCreateWithoutAchievementInput[] | UserAchievementUncheckedCreateWithoutAchievementInput[]
    connectOrCreate?: UserAchievementCreateOrConnectWithoutAchievementInput | UserAchievementCreateOrConnectWithoutAchievementInput[]
    createMany?: UserAchievementCreateManyAchievementInputEnvelope
    connect?: UserAchievementWhereUniqueInput | UserAchievementWhereUniqueInput[]
  }

  export type NullableEnumAchievementTypeFieldUpdateOperationsInput = {
    set?: $Enums.AchievementType | null
  }

  export type UserAchievementUpdateManyWithoutAchievementNestedInput = {
    create?: XOR<UserAchievementCreateWithoutAchievementInput, UserAchievementUncheckedCreateWithoutAchievementInput> | UserAchievementCreateWithoutAchievementInput[] | UserAchievementUncheckedCreateWithoutAchievementInput[]
    connectOrCreate?: UserAchievementCreateOrConnectWithoutAchievementInput | UserAchievementCreateOrConnectWithoutAchievementInput[]
    upsert?: UserAchievementUpsertWithWhereUniqueWithoutAchievementInput | UserAchievementUpsertWithWhereUniqueWithoutAchievementInput[]
    createMany?: UserAchievementCreateManyAchievementInputEnvelope
    set?: UserAchievementWhereUniqueInput | UserAchievementWhereUniqueInput[]
    disconnect?: UserAchievementWhereUniqueInput | UserAchievementWhereUniqueInput[]
    delete?: UserAchievementWhereUniqueInput | UserAchievementWhereUniqueInput[]
    connect?: UserAchievementWhereUniqueInput | UserAchievementWhereUniqueInput[]
    update?: UserAchievementUpdateWithWhereUniqueWithoutAchievementInput | UserAchievementUpdateWithWhereUniqueWithoutAchievementInput[]
    updateMany?: UserAchievementUpdateManyWithWhereWithoutAchievementInput | UserAchievementUpdateManyWithWhereWithoutAchievementInput[]
    deleteMany?: UserAchievementScalarWhereInput | UserAchievementScalarWhereInput[]
  }

  export type UserAchievementUncheckedUpdateManyWithoutAchievementNestedInput = {
    create?: XOR<UserAchievementCreateWithoutAchievementInput, UserAchievementUncheckedCreateWithoutAchievementInput> | UserAchievementCreateWithoutAchievementInput[] | UserAchievementUncheckedCreateWithoutAchievementInput[]
    connectOrCreate?: UserAchievementCreateOrConnectWithoutAchievementInput | UserAchievementCreateOrConnectWithoutAchievementInput[]
    upsert?: UserAchievementUpsertWithWhereUniqueWithoutAchievementInput | UserAchievementUpsertWithWhereUniqueWithoutAchievementInput[]
    createMany?: UserAchievementCreateManyAchievementInputEnvelope
    set?: UserAchievementWhereUniqueInput | UserAchievementWhereUniqueInput[]
    disconnect?: UserAchievementWhereUniqueInput | UserAchievementWhereUniqueInput[]
    delete?: UserAchievementWhereUniqueInput | UserAchievementWhereUniqueInput[]
    connect?: UserAchievementWhereUniqueInput | UserAchievementWhereUniqueInput[]
    update?: UserAchievementUpdateWithWhereUniqueWithoutAchievementInput | UserAchievementUpdateWithWhereUniqueWithoutAchievementInput[]
    updateMany?: UserAchievementUpdateManyWithWhereWithoutAchievementInput | UserAchievementUpdateManyWithWhereWithoutAchievementInput[]
    deleteMany?: UserAchievementScalarWhereInput | UserAchievementScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutUserAchievementInput = {
    create?: XOR<UserCreateWithoutUserAchievementInput, UserUncheckedCreateWithoutUserAchievementInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserAchievementInput
    connect?: UserWhereUniqueInput
  }

  export type AchievementCreateNestedOneWithoutUsersInput = {
    create?: XOR<AchievementCreateWithoutUsersInput, AchievementUncheckedCreateWithoutUsersInput>
    connectOrCreate?: AchievementCreateOrConnectWithoutUsersInput
    connect?: AchievementWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutUserAchievementNestedInput = {
    create?: XOR<UserCreateWithoutUserAchievementInput, UserUncheckedCreateWithoutUserAchievementInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserAchievementInput
    upsert?: UserUpsertWithoutUserAchievementInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutUserAchievementInput, UserUpdateWithoutUserAchievementInput>, UserUncheckedUpdateWithoutUserAchievementInput>
  }

  export type AchievementUpdateOneRequiredWithoutUsersNestedInput = {
    create?: XOR<AchievementCreateWithoutUsersInput, AchievementUncheckedCreateWithoutUsersInput>
    connectOrCreate?: AchievementCreateOrConnectWithoutUsersInput
    upsert?: AchievementUpsertWithoutUsersInput
    connect?: AchievementWhereUniqueInput
    update?: XOR<XOR<AchievementUpdateToOneWithWhereWithoutUsersInput, AchievementUpdateWithoutUsersInput>, AchievementUncheckedUpdateWithoutUsersInput>
  }

  export type UserCreateNestedOneWithoutWordStatsInput = {
    create?: XOR<UserCreateWithoutWordStatsInput, UserUncheckedCreateWithoutWordStatsInput>
    connectOrCreate?: UserCreateOrConnectWithoutWordStatsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutWordStatsNestedInput = {
    create?: XOR<UserCreateWithoutWordStatsInput, UserUncheckedCreateWithoutWordStatsInput>
    connectOrCreate?: UserCreateOrConnectWithoutWordStatsInput
    upsert?: UserUpsertWithoutWordStatsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutWordStatsInput, UserUpdateWithoutWordStatsInput>, UserUncheckedUpdateWithoutWordStatsInput>
  }

  export type UserCreateNestedOneWithoutDailyStatsInput = {
    create?: XOR<UserCreateWithoutDailyStatsInput, UserUncheckedCreateWithoutDailyStatsInput>
    connectOrCreate?: UserCreateOrConnectWithoutDailyStatsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutDailyStatsNestedInput = {
    create?: XOR<UserCreateWithoutDailyStatsInput, UserUncheckedCreateWithoutDailyStatsInput>
    connectOrCreate?: UserCreateOrConnectWithoutDailyStatsInput
    upsert?: UserUpsertWithoutDailyStatsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutDailyStatsInput, UserUpdateWithoutDailyStatsInput>, UserUncheckedUpdateWithoutDailyStatsInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumDifficultyFilter<$PrismaModel = never> = {
    equals?: $Enums.Difficulty | EnumDifficultyFieldRefInput<$PrismaModel>
    in?: $Enums.Difficulty[] | ListEnumDifficultyFieldRefInput<$PrismaModel>
    notIn?: $Enums.Difficulty[] | ListEnumDifficultyFieldRefInput<$PrismaModel>
    not?: NestedEnumDifficultyFilter<$PrismaModel> | $Enums.Difficulty
  }

  export type NestedEnumDifficultyWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Difficulty | EnumDifficultyFieldRefInput<$PrismaModel>
    in?: $Enums.Difficulty[] | ListEnumDifficultyFieldRefInput<$PrismaModel>
    notIn?: $Enums.Difficulty[] | ListEnumDifficultyFieldRefInput<$PrismaModel>
    not?: NestedEnumDifficultyWithAggregatesFilter<$PrismaModel> | $Enums.Difficulty
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDifficultyFilter<$PrismaModel>
    _max?: NestedEnumDifficultyFilter<$PrismaModel>
  }

  export type NestedEnumTaskTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.TaskType | EnumTaskTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TaskType[] | ListEnumTaskTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TaskType[] | ListEnumTaskTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTaskTypeFilter<$PrismaModel> | $Enums.TaskType
  }

  export type NestedEnumTaskTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TaskType | EnumTaskTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TaskType[] | ListEnumTaskTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TaskType[] | ListEnumTaskTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTaskTypeWithAggregatesFilter<$PrismaModel> | $Enums.TaskType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTaskTypeFilter<$PrismaModel>
    _max?: NestedEnumTaskTypeFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumAchievementTypeNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.AchievementType | EnumAchievementTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.AchievementType[] | ListEnumAchievementTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.AchievementType[] | ListEnumAchievementTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumAchievementTypeNullableFilter<$PrismaModel> | $Enums.AchievementType | null
  }

  export type NestedEnumAchievementTypeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AchievementType | EnumAchievementTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.AchievementType[] | ListEnumAchievementTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.AchievementType[] | ListEnumAchievementTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumAchievementTypeNullableWithAggregatesFilter<$PrismaModel> | $Enums.AchievementType | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumAchievementTypeNullableFilter<$PrismaModel>
    _max?: NestedEnumAchievementTypeNullableFilter<$PrismaModel>
  }

  export type UserTestProgressCreateWithoutUserInput = {
    completed?: boolean
    score?: number | null
    completedAt?: Date | string | null
    test: TestCreateNestedOneWithoutProgressInput
  }

  export type UserTestProgressUncheckedCreateWithoutUserInput = {
    id?: number
    testId: number
    completed?: boolean
    score?: number | null
    completedAt?: Date | string | null
  }

  export type UserTestProgressCreateOrConnectWithoutUserInput = {
    where: UserTestProgressWhereUniqueInput
    create: XOR<UserTestProgressCreateWithoutUserInput, UserTestProgressUncheckedCreateWithoutUserInput>
  }

  export type UserTestProgressCreateManyUserInputEnvelope = {
    data: UserTestProgressCreateManyUserInput | UserTestProgressCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserTaskAnswerCreateWithoutUserInput = {
    answer: string
    isCorrect: boolean
    task: TaskCreateNestedOneWithoutUserAnswersInput
  }

  export type UserTaskAnswerUncheckedCreateWithoutUserInput = {
    id?: number
    taskId: number
    answer: string
    isCorrect: boolean
  }

  export type UserTaskAnswerCreateOrConnectWithoutUserInput = {
    where: UserTaskAnswerWhereUniqueInput
    create: XOR<UserTaskAnswerCreateWithoutUserInput, UserTaskAnswerUncheckedCreateWithoutUserInput>
  }

  export type UserTaskAnswerCreateManyUserInputEnvelope = {
    data: UserTaskAnswerCreateManyUserInput | UserTaskAnswerCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserAchievementCreateWithoutUserInput = {
    receivedAt?: Date | string
    achievement: AchievementCreateNestedOneWithoutUsersInput
  }

  export type UserAchievementUncheckedCreateWithoutUserInput = {
    id?: number
    achievementId: number
    receivedAt?: Date | string
  }

  export type UserAchievementCreateOrConnectWithoutUserInput = {
    where: UserAchievementWhereUniqueInput
    create: XOR<UserAchievementCreateWithoutUserInput, UserAchievementUncheckedCreateWithoutUserInput>
  }

  export type UserAchievementCreateManyUserInputEnvelope = {
    data: UserAchievementCreateManyUserInput | UserAchievementCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type WordStatisticCreateWithoutUserInput = {
    word: string
    learnedAt?: Date | string
  }

  export type WordStatisticUncheckedCreateWithoutUserInput = {
    id?: number
    word: string
    learnedAt?: Date | string
  }

  export type WordStatisticCreateOrConnectWithoutUserInput = {
    where: WordStatisticWhereUniqueInput
    create: XOR<WordStatisticCreateWithoutUserInput, WordStatisticUncheckedCreateWithoutUserInput>
  }

  export type WordStatisticCreateManyUserInputEnvelope = {
    data: WordStatisticCreateManyUserInput | WordStatisticCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type DailyActivityCreateWithoutUserInput = {
    date: Date | string
    isActive?: boolean
  }

  export type DailyActivityUncheckedCreateWithoutUserInput = {
    id?: number
    date: Date | string
    isActive?: boolean
  }

  export type DailyActivityCreateOrConnectWithoutUserInput = {
    where: DailyActivityWhereUniqueInput
    create: XOR<DailyActivityCreateWithoutUserInput, DailyActivityUncheckedCreateWithoutUserInput>
  }

  export type DailyActivityCreateManyUserInputEnvelope = {
    data: DailyActivityCreateManyUserInput | DailyActivityCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserTestProgressUpsertWithWhereUniqueWithoutUserInput = {
    where: UserTestProgressWhereUniqueInput
    update: XOR<UserTestProgressUpdateWithoutUserInput, UserTestProgressUncheckedUpdateWithoutUserInput>
    create: XOR<UserTestProgressCreateWithoutUserInput, UserTestProgressUncheckedCreateWithoutUserInput>
  }

  export type UserTestProgressUpdateWithWhereUniqueWithoutUserInput = {
    where: UserTestProgressWhereUniqueInput
    data: XOR<UserTestProgressUpdateWithoutUserInput, UserTestProgressUncheckedUpdateWithoutUserInput>
  }

  export type UserTestProgressUpdateManyWithWhereWithoutUserInput = {
    where: UserTestProgressScalarWhereInput
    data: XOR<UserTestProgressUpdateManyMutationInput, UserTestProgressUncheckedUpdateManyWithoutUserInput>
  }

  export type UserTestProgressScalarWhereInput = {
    AND?: UserTestProgressScalarWhereInput | UserTestProgressScalarWhereInput[]
    OR?: UserTestProgressScalarWhereInput[]
    NOT?: UserTestProgressScalarWhereInput | UserTestProgressScalarWhereInput[]
    id?: IntFilter<"UserTestProgress"> | number
    userId?: IntFilter<"UserTestProgress"> | number
    testId?: IntFilter<"UserTestProgress"> | number
    completed?: BoolFilter<"UserTestProgress"> | boolean
    score?: IntNullableFilter<"UserTestProgress"> | number | null
    completedAt?: DateTimeNullableFilter<"UserTestProgress"> | Date | string | null
  }

  export type UserTaskAnswerUpsertWithWhereUniqueWithoutUserInput = {
    where: UserTaskAnswerWhereUniqueInput
    update: XOR<UserTaskAnswerUpdateWithoutUserInput, UserTaskAnswerUncheckedUpdateWithoutUserInput>
    create: XOR<UserTaskAnswerCreateWithoutUserInput, UserTaskAnswerUncheckedCreateWithoutUserInput>
  }

  export type UserTaskAnswerUpdateWithWhereUniqueWithoutUserInput = {
    where: UserTaskAnswerWhereUniqueInput
    data: XOR<UserTaskAnswerUpdateWithoutUserInput, UserTaskAnswerUncheckedUpdateWithoutUserInput>
  }

  export type UserTaskAnswerUpdateManyWithWhereWithoutUserInput = {
    where: UserTaskAnswerScalarWhereInput
    data: XOR<UserTaskAnswerUpdateManyMutationInput, UserTaskAnswerUncheckedUpdateManyWithoutUserInput>
  }

  export type UserTaskAnswerScalarWhereInput = {
    AND?: UserTaskAnswerScalarWhereInput | UserTaskAnswerScalarWhereInput[]
    OR?: UserTaskAnswerScalarWhereInput[]
    NOT?: UserTaskAnswerScalarWhereInput | UserTaskAnswerScalarWhereInput[]
    id?: IntFilter<"UserTaskAnswer"> | number
    userId?: IntFilter<"UserTaskAnswer"> | number
    taskId?: IntFilter<"UserTaskAnswer"> | number
    answer?: StringFilter<"UserTaskAnswer"> | string
    isCorrect?: BoolFilter<"UserTaskAnswer"> | boolean
  }

  export type UserAchievementUpsertWithWhereUniqueWithoutUserInput = {
    where: UserAchievementWhereUniqueInput
    update: XOR<UserAchievementUpdateWithoutUserInput, UserAchievementUncheckedUpdateWithoutUserInput>
    create: XOR<UserAchievementCreateWithoutUserInput, UserAchievementUncheckedCreateWithoutUserInput>
  }

  export type UserAchievementUpdateWithWhereUniqueWithoutUserInput = {
    where: UserAchievementWhereUniqueInput
    data: XOR<UserAchievementUpdateWithoutUserInput, UserAchievementUncheckedUpdateWithoutUserInput>
  }

  export type UserAchievementUpdateManyWithWhereWithoutUserInput = {
    where: UserAchievementScalarWhereInput
    data: XOR<UserAchievementUpdateManyMutationInput, UserAchievementUncheckedUpdateManyWithoutUserInput>
  }

  export type UserAchievementScalarWhereInput = {
    AND?: UserAchievementScalarWhereInput | UserAchievementScalarWhereInput[]
    OR?: UserAchievementScalarWhereInput[]
    NOT?: UserAchievementScalarWhereInput | UserAchievementScalarWhereInput[]
    id?: IntFilter<"UserAchievement"> | number
    userId?: IntFilter<"UserAchievement"> | number
    achievementId?: IntFilter<"UserAchievement"> | number
    receivedAt?: DateTimeFilter<"UserAchievement"> | Date | string
  }

  export type WordStatisticUpsertWithWhereUniqueWithoutUserInput = {
    where: WordStatisticWhereUniqueInput
    update: XOR<WordStatisticUpdateWithoutUserInput, WordStatisticUncheckedUpdateWithoutUserInput>
    create: XOR<WordStatisticCreateWithoutUserInput, WordStatisticUncheckedCreateWithoutUserInput>
  }

  export type WordStatisticUpdateWithWhereUniqueWithoutUserInput = {
    where: WordStatisticWhereUniqueInput
    data: XOR<WordStatisticUpdateWithoutUserInput, WordStatisticUncheckedUpdateWithoutUserInput>
  }

  export type WordStatisticUpdateManyWithWhereWithoutUserInput = {
    where: WordStatisticScalarWhereInput
    data: XOR<WordStatisticUpdateManyMutationInput, WordStatisticUncheckedUpdateManyWithoutUserInput>
  }

  export type WordStatisticScalarWhereInput = {
    AND?: WordStatisticScalarWhereInput | WordStatisticScalarWhereInput[]
    OR?: WordStatisticScalarWhereInput[]
    NOT?: WordStatisticScalarWhereInput | WordStatisticScalarWhereInput[]
    id?: IntFilter<"WordStatistic"> | number
    word?: StringFilter<"WordStatistic"> | string
    learnedAt?: DateTimeFilter<"WordStatistic"> | Date | string
    userId?: IntFilter<"WordStatistic"> | number
  }

  export type DailyActivityUpsertWithWhereUniqueWithoutUserInput = {
    where: DailyActivityWhereUniqueInput
    update: XOR<DailyActivityUpdateWithoutUserInput, DailyActivityUncheckedUpdateWithoutUserInput>
    create: XOR<DailyActivityCreateWithoutUserInput, DailyActivityUncheckedCreateWithoutUserInput>
  }

  export type DailyActivityUpdateWithWhereUniqueWithoutUserInput = {
    where: DailyActivityWhereUniqueInput
    data: XOR<DailyActivityUpdateWithoutUserInput, DailyActivityUncheckedUpdateWithoutUserInput>
  }

  export type DailyActivityUpdateManyWithWhereWithoutUserInput = {
    where: DailyActivityScalarWhereInput
    data: XOR<DailyActivityUpdateManyMutationInput, DailyActivityUncheckedUpdateManyWithoutUserInput>
  }

  export type DailyActivityScalarWhereInput = {
    AND?: DailyActivityScalarWhereInput | DailyActivityScalarWhereInput[]
    OR?: DailyActivityScalarWhereInput[]
    NOT?: DailyActivityScalarWhereInput | DailyActivityScalarWhereInput[]
    id?: IntFilter<"DailyActivity"> | number
    date?: DateTimeFilter<"DailyActivity"> | Date | string
    isActive?: BoolFilter<"DailyActivity"> | boolean
    userId?: IntFilter<"DailyActivity"> | number
  }

  export type TestCreateWithoutCourseInput = {
    title: string
    createdAt?: Date | string
    updatedAt?: Date | string
    tasks?: TaskCreateNestedManyWithoutTestInput
    progress?: UserTestProgressCreateNestedManyWithoutTestInput
  }

  export type TestUncheckedCreateWithoutCourseInput = {
    id?: number
    title: string
    createdAt?: Date | string
    updatedAt?: Date | string
    tasks?: TaskUncheckedCreateNestedManyWithoutTestInput
    progress?: UserTestProgressUncheckedCreateNestedManyWithoutTestInput
  }

  export type TestCreateOrConnectWithoutCourseInput = {
    where: TestWhereUniqueInput
    create: XOR<TestCreateWithoutCourseInput, TestUncheckedCreateWithoutCourseInput>
  }

  export type TestCreateManyCourseInputEnvelope = {
    data: TestCreateManyCourseInput | TestCreateManyCourseInput[]
    skipDuplicates?: boolean
  }

  export type TestUpsertWithWhereUniqueWithoutCourseInput = {
    where: TestWhereUniqueInput
    update: XOR<TestUpdateWithoutCourseInput, TestUncheckedUpdateWithoutCourseInput>
    create: XOR<TestCreateWithoutCourseInput, TestUncheckedCreateWithoutCourseInput>
  }

  export type TestUpdateWithWhereUniqueWithoutCourseInput = {
    where: TestWhereUniqueInput
    data: XOR<TestUpdateWithoutCourseInput, TestUncheckedUpdateWithoutCourseInput>
  }

  export type TestUpdateManyWithWhereWithoutCourseInput = {
    where: TestScalarWhereInput
    data: XOR<TestUpdateManyMutationInput, TestUncheckedUpdateManyWithoutCourseInput>
  }

  export type TestScalarWhereInput = {
    AND?: TestScalarWhereInput | TestScalarWhereInput[]
    OR?: TestScalarWhereInput[]
    NOT?: TestScalarWhereInput | TestScalarWhereInput[]
    id?: IntFilter<"Test"> | number
    title?: StringFilter<"Test"> | string
    courseId?: IntFilter<"Test"> | number
    createdAt?: DateTimeFilter<"Test"> | Date | string
    updatedAt?: DateTimeFilter<"Test"> | Date | string
  }

  export type CourseCreateWithoutTestsInput = {
    title: string
    description: string
    imageUrl?: string | null
    difficulty: $Enums.Difficulty
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CourseUncheckedCreateWithoutTestsInput = {
    id?: number
    title: string
    description: string
    imageUrl?: string | null
    difficulty: $Enums.Difficulty
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CourseCreateOrConnectWithoutTestsInput = {
    where: CourseWhereUniqueInput
    create: XOR<CourseCreateWithoutTestsInput, CourseUncheckedCreateWithoutTestsInput>
  }

  export type TaskCreateWithoutTestInput = {
    question: string
    options?: TaskCreateoptionsInput | string[]
    correctAnswer?: TaskCreatecorrectAnswerInput | string[]
    type: $Enums.TaskType
    userAnswers?: UserTaskAnswerCreateNestedManyWithoutTaskInput
  }

  export type TaskUncheckedCreateWithoutTestInput = {
    id?: number
    question: string
    options?: TaskCreateoptionsInput | string[]
    correctAnswer?: TaskCreatecorrectAnswerInput | string[]
    type: $Enums.TaskType
    userAnswers?: UserTaskAnswerUncheckedCreateNestedManyWithoutTaskInput
  }

  export type TaskCreateOrConnectWithoutTestInput = {
    where: TaskWhereUniqueInput
    create: XOR<TaskCreateWithoutTestInput, TaskUncheckedCreateWithoutTestInput>
  }

  export type TaskCreateManyTestInputEnvelope = {
    data: TaskCreateManyTestInput | TaskCreateManyTestInput[]
    skipDuplicates?: boolean
  }

  export type UserTestProgressCreateWithoutTestInput = {
    completed?: boolean
    score?: number | null
    completedAt?: Date | string | null
    user: UserCreateNestedOneWithoutTestProgressInput
  }

  export type UserTestProgressUncheckedCreateWithoutTestInput = {
    id?: number
    userId: number
    completed?: boolean
    score?: number | null
    completedAt?: Date | string | null
  }

  export type UserTestProgressCreateOrConnectWithoutTestInput = {
    where: UserTestProgressWhereUniqueInput
    create: XOR<UserTestProgressCreateWithoutTestInput, UserTestProgressUncheckedCreateWithoutTestInput>
  }

  export type UserTestProgressCreateManyTestInputEnvelope = {
    data: UserTestProgressCreateManyTestInput | UserTestProgressCreateManyTestInput[]
    skipDuplicates?: boolean
  }

  export type CourseUpsertWithoutTestsInput = {
    update: XOR<CourseUpdateWithoutTestsInput, CourseUncheckedUpdateWithoutTestsInput>
    create: XOR<CourseCreateWithoutTestsInput, CourseUncheckedCreateWithoutTestsInput>
    where?: CourseWhereInput
  }

  export type CourseUpdateToOneWithWhereWithoutTestsInput = {
    where?: CourseWhereInput
    data: XOR<CourseUpdateWithoutTestsInput, CourseUncheckedUpdateWithoutTestsInput>
  }

  export type CourseUpdateWithoutTestsInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CourseUncheckedUpdateWithoutTestsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskUpsertWithWhereUniqueWithoutTestInput = {
    where: TaskWhereUniqueInput
    update: XOR<TaskUpdateWithoutTestInput, TaskUncheckedUpdateWithoutTestInput>
    create: XOR<TaskCreateWithoutTestInput, TaskUncheckedCreateWithoutTestInput>
  }

  export type TaskUpdateWithWhereUniqueWithoutTestInput = {
    where: TaskWhereUniqueInput
    data: XOR<TaskUpdateWithoutTestInput, TaskUncheckedUpdateWithoutTestInput>
  }

  export type TaskUpdateManyWithWhereWithoutTestInput = {
    where: TaskScalarWhereInput
    data: XOR<TaskUpdateManyMutationInput, TaskUncheckedUpdateManyWithoutTestInput>
  }

  export type TaskScalarWhereInput = {
    AND?: TaskScalarWhereInput | TaskScalarWhereInput[]
    OR?: TaskScalarWhereInput[]
    NOT?: TaskScalarWhereInput | TaskScalarWhereInput[]
    id?: IntFilter<"Task"> | number
    question?: StringFilter<"Task"> | string
    options?: StringNullableListFilter<"Task">
    correctAnswer?: StringNullableListFilter<"Task">
    type?: EnumTaskTypeFilter<"Task"> | $Enums.TaskType
    testId?: IntFilter<"Task"> | number
  }

  export type UserTestProgressUpsertWithWhereUniqueWithoutTestInput = {
    where: UserTestProgressWhereUniqueInput
    update: XOR<UserTestProgressUpdateWithoutTestInput, UserTestProgressUncheckedUpdateWithoutTestInput>
    create: XOR<UserTestProgressCreateWithoutTestInput, UserTestProgressUncheckedCreateWithoutTestInput>
  }

  export type UserTestProgressUpdateWithWhereUniqueWithoutTestInput = {
    where: UserTestProgressWhereUniqueInput
    data: XOR<UserTestProgressUpdateWithoutTestInput, UserTestProgressUncheckedUpdateWithoutTestInput>
  }

  export type UserTestProgressUpdateManyWithWhereWithoutTestInput = {
    where: UserTestProgressScalarWhereInput
    data: XOR<UserTestProgressUpdateManyMutationInput, UserTestProgressUncheckedUpdateManyWithoutTestInput>
  }

  export type TestCreateWithoutTasksInput = {
    title: string
    createdAt?: Date | string
    updatedAt?: Date | string
    course: CourseCreateNestedOneWithoutTestsInput
    progress?: UserTestProgressCreateNestedManyWithoutTestInput
  }

  export type TestUncheckedCreateWithoutTasksInput = {
    id?: number
    title: string
    courseId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    progress?: UserTestProgressUncheckedCreateNestedManyWithoutTestInput
  }

  export type TestCreateOrConnectWithoutTasksInput = {
    where: TestWhereUniqueInput
    create: XOR<TestCreateWithoutTasksInput, TestUncheckedCreateWithoutTasksInput>
  }

  export type UserTaskAnswerCreateWithoutTaskInput = {
    answer: string
    isCorrect: boolean
    user: UserCreateNestedOneWithoutUserAnswersInput
  }

  export type UserTaskAnswerUncheckedCreateWithoutTaskInput = {
    id?: number
    userId: number
    answer: string
    isCorrect: boolean
  }

  export type UserTaskAnswerCreateOrConnectWithoutTaskInput = {
    where: UserTaskAnswerWhereUniqueInput
    create: XOR<UserTaskAnswerCreateWithoutTaskInput, UserTaskAnswerUncheckedCreateWithoutTaskInput>
  }

  export type UserTaskAnswerCreateManyTaskInputEnvelope = {
    data: UserTaskAnswerCreateManyTaskInput | UserTaskAnswerCreateManyTaskInput[]
    skipDuplicates?: boolean
  }

  export type TestUpsertWithoutTasksInput = {
    update: XOR<TestUpdateWithoutTasksInput, TestUncheckedUpdateWithoutTasksInput>
    create: XOR<TestCreateWithoutTasksInput, TestUncheckedCreateWithoutTasksInput>
    where?: TestWhereInput
  }

  export type TestUpdateToOneWithWhereWithoutTasksInput = {
    where?: TestWhereInput
    data: XOR<TestUpdateWithoutTasksInput, TestUncheckedUpdateWithoutTasksInput>
  }

  export type TestUpdateWithoutTasksInput = {
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    course?: CourseUpdateOneRequiredWithoutTestsNestedInput
    progress?: UserTestProgressUpdateManyWithoutTestNestedInput
  }

  export type TestUncheckedUpdateWithoutTasksInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    courseId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    progress?: UserTestProgressUncheckedUpdateManyWithoutTestNestedInput
  }

  export type UserTaskAnswerUpsertWithWhereUniqueWithoutTaskInput = {
    where: UserTaskAnswerWhereUniqueInput
    update: XOR<UserTaskAnswerUpdateWithoutTaskInput, UserTaskAnswerUncheckedUpdateWithoutTaskInput>
    create: XOR<UserTaskAnswerCreateWithoutTaskInput, UserTaskAnswerUncheckedCreateWithoutTaskInput>
  }

  export type UserTaskAnswerUpdateWithWhereUniqueWithoutTaskInput = {
    where: UserTaskAnswerWhereUniqueInput
    data: XOR<UserTaskAnswerUpdateWithoutTaskInput, UserTaskAnswerUncheckedUpdateWithoutTaskInput>
  }

  export type UserTaskAnswerUpdateManyWithWhereWithoutTaskInput = {
    where: UserTaskAnswerScalarWhereInput
    data: XOR<UserTaskAnswerUpdateManyMutationInput, UserTaskAnswerUncheckedUpdateManyWithoutTaskInput>
  }

  export type UserCreateWithoutTestProgressInput = {
    name: string
    surname: string
    birthDate: Date | string
    phoneNumber: string
    email: string
    password: string
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    hashedRefreshToken?: string | null
    userAnswers?: UserTaskAnswerCreateNestedManyWithoutUserInput
    userAchievement?: UserAchievementCreateNestedManyWithoutUserInput
    wordStats?: WordStatisticCreateNestedManyWithoutUserInput
    dailyStats?: DailyActivityCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutTestProgressInput = {
    id?: number
    name: string
    surname: string
    birthDate: Date | string
    phoneNumber: string
    email: string
    password: string
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    hashedRefreshToken?: string | null
    userAnswers?: UserTaskAnswerUncheckedCreateNestedManyWithoutUserInput
    userAchievement?: UserAchievementUncheckedCreateNestedManyWithoutUserInput
    wordStats?: WordStatisticUncheckedCreateNestedManyWithoutUserInput
    dailyStats?: DailyActivityUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutTestProgressInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTestProgressInput, UserUncheckedCreateWithoutTestProgressInput>
  }

  export type TestCreateWithoutProgressInput = {
    title: string
    createdAt?: Date | string
    updatedAt?: Date | string
    course: CourseCreateNestedOneWithoutTestsInput
    tasks?: TaskCreateNestedManyWithoutTestInput
  }

  export type TestUncheckedCreateWithoutProgressInput = {
    id?: number
    title: string
    courseId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    tasks?: TaskUncheckedCreateNestedManyWithoutTestInput
  }

  export type TestCreateOrConnectWithoutProgressInput = {
    where: TestWhereUniqueInput
    create: XOR<TestCreateWithoutProgressInput, TestUncheckedCreateWithoutProgressInput>
  }

  export type UserUpsertWithoutTestProgressInput = {
    update: XOR<UserUpdateWithoutTestProgressInput, UserUncheckedUpdateWithoutTestProgressInput>
    create: XOR<UserCreateWithoutTestProgressInput, UserUncheckedCreateWithoutTestProgressInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTestProgressInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTestProgressInput, UserUncheckedUpdateWithoutTestProgressInput>
  }

  export type UserUpdateWithoutTestProgressInput = {
    name?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hashedRefreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    userAnswers?: UserTaskAnswerUpdateManyWithoutUserNestedInput
    userAchievement?: UserAchievementUpdateManyWithoutUserNestedInput
    wordStats?: WordStatisticUpdateManyWithoutUserNestedInput
    dailyStats?: DailyActivityUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutTestProgressInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hashedRefreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    userAnswers?: UserTaskAnswerUncheckedUpdateManyWithoutUserNestedInput
    userAchievement?: UserAchievementUncheckedUpdateManyWithoutUserNestedInput
    wordStats?: WordStatisticUncheckedUpdateManyWithoutUserNestedInput
    dailyStats?: DailyActivityUncheckedUpdateManyWithoutUserNestedInput
  }

  export type TestUpsertWithoutProgressInput = {
    update: XOR<TestUpdateWithoutProgressInput, TestUncheckedUpdateWithoutProgressInput>
    create: XOR<TestCreateWithoutProgressInput, TestUncheckedCreateWithoutProgressInput>
    where?: TestWhereInput
  }

  export type TestUpdateToOneWithWhereWithoutProgressInput = {
    where?: TestWhereInput
    data: XOR<TestUpdateWithoutProgressInput, TestUncheckedUpdateWithoutProgressInput>
  }

  export type TestUpdateWithoutProgressInput = {
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    course?: CourseUpdateOneRequiredWithoutTestsNestedInput
    tasks?: TaskUpdateManyWithoutTestNestedInput
  }

  export type TestUncheckedUpdateWithoutProgressInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    courseId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tasks?: TaskUncheckedUpdateManyWithoutTestNestedInput
  }

  export type UserCreateWithoutUserAnswersInput = {
    name: string
    surname: string
    birthDate: Date | string
    phoneNumber: string
    email: string
    password: string
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    hashedRefreshToken?: string | null
    testProgress?: UserTestProgressCreateNestedManyWithoutUserInput
    userAchievement?: UserAchievementCreateNestedManyWithoutUserInput
    wordStats?: WordStatisticCreateNestedManyWithoutUserInput
    dailyStats?: DailyActivityCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutUserAnswersInput = {
    id?: number
    name: string
    surname: string
    birthDate: Date | string
    phoneNumber: string
    email: string
    password: string
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    hashedRefreshToken?: string | null
    testProgress?: UserTestProgressUncheckedCreateNestedManyWithoutUserInput
    userAchievement?: UserAchievementUncheckedCreateNestedManyWithoutUserInput
    wordStats?: WordStatisticUncheckedCreateNestedManyWithoutUserInput
    dailyStats?: DailyActivityUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutUserAnswersInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUserAnswersInput, UserUncheckedCreateWithoutUserAnswersInput>
  }

  export type TaskCreateWithoutUserAnswersInput = {
    question: string
    options?: TaskCreateoptionsInput | string[]
    correctAnswer?: TaskCreatecorrectAnswerInput | string[]
    type: $Enums.TaskType
    test: TestCreateNestedOneWithoutTasksInput
  }

  export type TaskUncheckedCreateWithoutUserAnswersInput = {
    id?: number
    question: string
    options?: TaskCreateoptionsInput | string[]
    correctAnswer?: TaskCreatecorrectAnswerInput | string[]
    type: $Enums.TaskType
    testId: number
  }

  export type TaskCreateOrConnectWithoutUserAnswersInput = {
    where: TaskWhereUniqueInput
    create: XOR<TaskCreateWithoutUserAnswersInput, TaskUncheckedCreateWithoutUserAnswersInput>
  }

  export type UserUpsertWithoutUserAnswersInput = {
    update: XOR<UserUpdateWithoutUserAnswersInput, UserUncheckedUpdateWithoutUserAnswersInput>
    create: XOR<UserCreateWithoutUserAnswersInput, UserUncheckedCreateWithoutUserAnswersInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutUserAnswersInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutUserAnswersInput, UserUncheckedUpdateWithoutUserAnswersInput>
  }

  export type UserUpdateWithoutUserAnswersInput = {
    name?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hashedRefreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    testProgress?: UserTestProgressUpdateManyWithoutUserNestedInput
    userAchievement?: UserAchievementUpdateManyWithoutUserNestedInput
    wordStats?: WordStatisticUpdateManyWithoutUserNestedInput
    dailyStats?: DailyActivityUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutUserAnswersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hashedRefreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    testProgress?: UserTestProgressUncheckedUpdateManyWithoutUserNestedInput
    userAchievement?: UserAchievementUncheckedUpdateManyWithoutUserNestedInput
    wordStats?: WordStatisticUncheckedUpdateManyWithoutUserNestedInput
    dailyStats?: DailyActivityUncheckedUpdateManyWithoutUserNestedInput
  }

  export type TaskUpsertWithoutUserAnswersInput = {
    update: XOR<TaskUpdateWithoutUserAnswersInput, TaskUncheckedUpdateWithoutUserAnswersInput>
    create: XOR<TaskCreateWithoutUserAnswersInput, TaskUncheckedCreateWithoutUserAnswersInput>
    where?: TaskWhereInput
  }

  export type TaskUpdateToOneWithWhereWithoutUserAnswersInput = {
    where?: TaskWhereInput
    data: XOR<TaskUpdateWithoutUserAnswersInput, TaskUncheckedUpdateWithoutUserAnswersInput>
  }

  export type TaskUpdateWithoutUserAnswersInput = {
    question?: StringFieldUpdateOperationsInput | string
    options?: TaskUpdateoptionsInput | string[]
    correctAnswer?: TaskUpdatecorrectAnswerInput | string[]
    type?: EnumTaskTypeFieldUpdateOperationsInput | $Enums.TaskType
    test?: TestUpdateOneRequiredWithoutTasksNestedInput
  }

  export type TaskUncheckedUpdateWithoutUserAnswersInput = {
    id?: IntFieldUpdateOperationsInput | number
    question?: StringFieldUpdateOperationsInput | string
    options?: TaskUpdateoptionsInput | string[]
    correctAnswer?: TaskUpdatecorrectAnswerInput | string[]
    type?: EnumTaskTypeFieldUpdateOperationsInput | $Enums.TaskType
    testId?: IntFieldUpdateOperationsInput | number
  }

  export type UserAchievementCreateWithoutAchievementInput = {
    receivedAt?: Date | string
    user: UserCreateNestedOneWithoutUserAchievementInput
  }

  export type UserAchievementUncheckedCreateWithoutAchievementInput = {
    id?: number
    userId: number
    receivedAt?: Date | string
  }

  export type UserAchievementCreateOrConnectWithoutAchievementInput = {
    where: UserAchievementWhereUniqueInput
    create: XOR<UserAchievementCreateWithoutAchievementInput, UserAchievementUncheckedCreateWithoutAchievementInput>
  }

  export type UserAchievementCreateManyAchievementInputEnvelope = {
    data: UserAchievementCreateManyAchievementInput | UserAchievementCreateManyAchievementInput[]
    skipDuplicates?: boolean
  }

  export type UserAchievementUpsertWithWhereUniqueWithoutAchievementInput = {
    where: UserAchievementWhereUniqueInput
    update: XOR<UserAchievementUpdateWithoutAchievementInput, UserAchievementUncheckedUpdateWithoutAchievementInput>
    create: XOR<UserAchievementCreateWithoutAchievementInput, UserAchievementUncheckedCreateWithoutAchievementInput>
  }

  export type UserAchievementUpdateWithWhereUniqueWithoutAchievementInput = {
    where: UserAchievementWhereUniqueInput
    data: XOR<UserAchievementUpdateWithoutAchievementInput, UserAchievementUncheckedUpdateWithoutAchievementInput>
  }

  export type UserAchievementUpdateManyWithWhereWithoutAchievementInput = {
    where: UserAchievementScalarWhereInput
    data: XOR<UserAchievementUpdateManyMutationInput, UserAchievementUncheckedUpdateManyWithoutAchievementInput>
  }

  export type UserCreateWithoutUserAchievementInput = {
    name: string
    surname: string
    birthDate: Date | string
    phoneNumber: string
    email: string
    password: string
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    hashedRefreshToken?: string | null
    testProgress?: UserTestProgressCreateNestedManyWithoutUserInput
    userAnswers?: UserTaskAnswerCreateNestedManyWithoutUserInput
    wordStats?: WordStatisticCreateNestedManyWithoutUserInput
    dailyStats?: DailyActivityCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutUserAchievementInput = {
    id?: number
    name: string
    surname: string
    birthDate: Date | string
    phoneNumber: string
    email: string
    password: string
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    hashedRefreshToken?: string | null
    testProgress?: UserTestProgressUncheckedCreateNestedManyWithoutUserInput
    userAnswers?: UserTaskAnswerUncheckedCreateNestedManyWithoutUserInput
    wordStats?: WordStatisticUncheckedCreateNestedManyWithoutUserInput
    dailyStats?: DailyActivityUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutUserAchievementInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUserAchievementInput, UserUncheckedCreateWithoutUserAchievementInput>
  }

  export type AchievementCreateWithoutUsersInput = {
    title: string
    description: string
    iconUrl?: string | null
    type?: $Enums.AchievementType | null
    conditionValue?: number | null
    createdAt?: Date | string
  }

  export type AchievementUncheckedCreateWithoutUsersInput = {
    id?: number
    title: string
    description: string
    iconUrl?: string | null
    type?: $Enums.AchievementType | null
    conditionValue?: number | null
    createdAt?: Date | string
  }

  export type AchievementCreateOrConnectWithoutUsersInput = {
    where: AchievementWhereUniqueInput
    create: XOR<AchievementCreateWithoutUsersInput, AchievementUncheckedCreateWithoutUsersInput>
  }

  export type UserUpsertWithoutUserAchievementInput = {
    update: XOR<UserUpdateWithoutUserAchievementInput, UserUncheckedUpdateWithoutUserAchievementInput>
    create: XOR<UserCreateWithoutUserAchievementInput, UserUncheckedCreateWithoutUserAchievementInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutUserAchievementInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutUserAchievementInput, UserUncheckedUpdateWithoutUserAchievementInput>
  }

  export type UserUpdateWithoutUserAchievementInput = {
    name?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hashedRefreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    testProgress?: UserTestProgressUpdateManyWithoutUserNestedInput
    userAnswers?: UserTaskAnswerUpdateManyWithoutUserNestedInput
    wordStats?: WordStatisticUpdateManyWithoutUserNestedInput
    dailyStats?: DailyActivityUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutUserAchievementInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hashedRefreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    testProgress?: UserTestProgressUncheckedUpdateManyWithoutUserNestedInput
    userAnswers?: UserTaskAnswerUncheckedUpdateManyWithoutUserNestedInput
    wordStats?: WordStatisticUncheckedUpdateManyWithoutUserNestedInput
    dailyStats?: DailyActivityUncheckedUpdateManyWithoutUserNestedInput
  }

  export type AchievementUpsertWithoutUsersInput = {
    update: XOR<AchievementUpdateWithoutUsersInput, AchievementUncheckedUpdateWithoutUsersInput>
    create: XOR<AchievementCreateWithoutUsersInput, AchievementUncheckedCreateWithoutUsersInput>
    where?: AchievementWhereInput
  }

  export type AchievementUpdateToOneWithWhereWithoutUsersInput = {
    where?: AchievementWhereInput
    data: XOR<AchievementUpdateWithoutUsersInput, AchievementUncheckedUpdateWithoutUsersInput>
  }

  export type AchievementUpdateWithoutUsersInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    iconUrl?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableEnumAchievementTypeFieldUpdateOperationsInput | $Enums.AchievementType | null
    conditionValue?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AchievementUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    iconUrl?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableEnumAchievementTypeFieldUpdateOperationsInput | $Enums.AchievementType | null
    conditionValue?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateWithoutWordStatsInput = {
    name: string
    surname: string
    birthDate: Date | string
    phoneNumber: string
    email: string
    password: string
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    hashedRefreshToken?: string | null
    testProgress?: UserTestProgressCreateNestedManyWithoutUserInput
    userAnswers?: UserTaskAnswerCreateNestedManyWithoutUserInput
    userAchievement?: UserAchievementCreateNestedManyWithoutUserInput
    dailyStats?: DailyActivityCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutWordStatsInput = {
    id?: number
    name: string
    surname: string
    birthDate: Date | string
    phoneNumber: string
    email: string
    password: string
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    hashedRefreshToken?: string | null
    testProgress?: UserTestProgressUncheckedCreateNestedManyWithoutUserInput
    userAnswers?: UserTaskAnswerUncheckedCreateNestedManyWithoutUserInput
    userAchievement?: UserAchievementUncheckedCreateNestedManyWithoutUserInput
    dailyStats?: DailyActivityUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutWordStatsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutWordStatsInput, UserUncheckedCreateWithoutWordStatsInput>
  }

  export type UserUpsertWithoutWordStatsInput = {
    update: XOR<UserUpdateWithoutWordStatsInput, UserUncheckedUpdateWithoutWordStatsInput>
    create: XOR<UserCreateWithoutWordStatsInput, UserUncheckedCreateWithoutWordStatsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutWordStatsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutWordStatsInput, UserUncheckedUpdateWithoutWordStatsInput>
  }

  export type UserUpdateWithoutWordStatsInput = {
    name?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hashedRefreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    testProgress?: UserTestProgressUpdateManyWithoutUserNestedInput
    userAnswers?: UserTaskAnswerUpdateManyWithoutUserNestedInput
    userAchievement?: UserAchievementUpdateManyWithoutUserNestedInput
    dailyStats?: DailyActivityUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutWordStatsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hashedRefreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    testProgress?: UserTestProgressUncheckedUpdateManyWithoutUserNestedInput
    userAnswers?: UserTaskAnswerUncheckedUpdateManyWithoutUserNestedInput
    userAchievement?: UserAchievementUncheckedUpdateManyWithoutUserNestedInput
    dailyStats?: DailyActivityUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutDailyStatsInput = {
    name: string
    surname: string
    birthDate: Date | string
    phoneNumber: string
    email: string
    password: string
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    hashedRefreshToken?: string | null
    testProgress?: UserTestProgressCreateNestedManyWithoutUserInput
    userAnswers?: UserTaskAnswerCreateNestedManyWithoutUserInput
    userAchievement?: UserAchievementCreateNestedManyWithoutUserInput
    wordStats?: WordStatisticCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutDailyStatsInput = {
    id?: number
    name: string
    surname: string
    birthDate: Date | string
    phoneNumber: string
    email: string
    password: string
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    hashedRefreshToken?: string | null
    testProgress?: UserTestProgressUncheckedCreateNestedManyWithoutUserInput
    userAnswers?: UserTaskAnswerUncheckedCreateNestedManyWithoutUserInput
    userAchievement?: UserAchievementUncheckedCreateNestedManyWithoutUserInput
    wordStats?: WordStatisticUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutDailyStatsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutDailyStatsInput, UserUncheckedCreateWithoutDailyStatsInput>
  }

  export type UserUpsertWithoutDailyStatsInput = {
    update: XOR<UserUpdateWithoutDailyStatsInput, UserUncheckedUpdateWithoutDailyStatsInput>
    create: XOR<UserCreateWithoutDailyStatsInput, UserUncheckedCreateWithoutDailyStatsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutDailyStatsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutDailyStatsInput, UserUncheckedUpdateWithoutDailyStatsInput>
  }

  export type UserUpdateWithoutDailyStatsInput = {
    name?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hashedRefreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    testProgress?: UserTestProgressUpdateManyWithoutUserNestedInput
    userAnswers?: UserTaskAnswerUpdateManyWithoutUserNestedInput
    userAchievement?: UserAchievementUpdateManyWithoutUserNestedInput
    wordStats?: WordStatisticUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutDailyStatsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hashedRefreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    testProgress?: UserTestProgressUncheckedUpdateManyWithoutUserNestedInput
    userAnswers?: UserTaskAnswerUncheckedUpdateManyWithoutUserNestedInput
    userAchievement?: UserAchievementUncheckedUpdateManyWithoutUserNestedInput
    wordStats?: WordStatisticUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserTestProgressCreateManyUserInput = {
    id?: number
    testId: number
    completed?: boolean
    score?: number | null
    completedAt?: Date | string | null
  }

  export type UserTaskAnswerCreateManyUserInput = {
    id?: number
    taskId: number
    answer: string
    isCorrect: boolean
  }

  export type UserAchievementCreateManyUserInput = {
    id?: number
    achievementId: number
    receivedAt?: Date | string
  }

  export type WordStatisticCreateManyUserInput = {
    id?: number
    word: string
    learnedAt?: Date | string
  }

  export type DailyActivityCreateManyUserInput = {
    id?: number
    date: Date | string
    isActive?: boolean
  }

  export type UserTestProgressUpdateWithoutUserInput = {
    completed?: BoolFieldUpdateOperationsInput | boolean
    score?: NullableIntFieldUpdateOperationsInput | number | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    test?: TestUpdateOneRequiredWithoutProgressNestedInput
  }

  export type UserTestProgressUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    testId?: IntFieldUpdateOperationsInput | number
    completed?: BoolFieldUpdateOperationsInput | boolean
    score?: NullableIntFieldUpdateOperationsInput | number | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserTestProgressUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    testId?: IntFieldUpdateOperationsInput | number
    completed?: BoolFieldUpdateOperationsInput | boolean
    score?: NullableIntFieldUpdateOperationsInput | number | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserTaskAnswerUpdateWithoutUserInput = {
    answer?: StringFieldUpdateOperationsInput | string
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
    task?: TaskUpdateOneRequiredWithoutUserAnswersNestedInput
  }

  export type UserTaskAnswerUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    taskId?: IntFieldUpdateOperationsInput | number
    answer?: StringFieldUpdateOperationsInput | string
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserTaskAnswerUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    taskId?: IntFieldUpdateOperationsInput | number
    answer?: StringFieldUpdateOperationsInput | string
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserAchievementUpdateWithoutUserInput = {
    receivedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    achievement?: AchievementUpdateOneRequiredWithoutUsersNestedInput
  }

  export type UserAchievementUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    achievementId?: IntFieldUpdateOperationsInput | number
    receivedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserAchievementUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    achievementId?: IntFieldUpdateOperationsInput | number
    receivedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WordStatisticUpdateWithoutUserInput = {
    word?: StringFieldUpdateOperationsInput | string
    learnedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WordStatisticUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    word?: StringFieldUpdateOperationsInput | string
    learnedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WordStatisticUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    word?: StringFieldUpdateOperationsInput | string
    learnedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DailyActivityUpdateWithoutUserInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type DailyActivityUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type DailyActivityUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type TestCreateManyCourseInput = {
    id?: number
    title: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TestUpdateWithoutCourseInput = {
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tasks?: TaskUpdateManyWithoutTestNestedInput
    progress?: UserTestProgressUpdateManyWithoutTestNestedInput
  }

  export type TestUncheckedUpdateWithoutCourseInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tasks?: TaskUncheckedUpdateManyWithoutTestNestedInput
    progress?: UserTestProgressUncheckedUpdateManyWithoutTestNestedInput
  }

  export type TestUncheckedUpdateManyWithoutCourseInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskCreateManyTestInput = {
    id?: number
    question: string
    options?: TaskCreateoptionsInput | string[]
    correctAnswer?: TaskCreatecorrectAnswerInput | string[]
    type: $Enums.TaskType
  }

  export type UserTestProgressCreateManyTestInput = {
    id?: number
    userId: number
    completed?: boolean
    score?: number | null
    completedAt?: Date | string | null
  }

  export type TaskUpdateWithoutTestInput = {
    question?: StringFieldUpdateOperationsInput | string
    options?: TaskUpdateoptionsInput | string[]
    correctAnswer?: TaskUpdatecorrectAnswerInput | string[]
    type?: EnumTaskTypeFieldUpdateOperationsInput | $Enums.TaskType
    userAnswers?: UserTaskAnswerUpdateManyWithoutTaskNestedInput
  }

  export type TaskUncheckedUpdateWithoutTestInput = {
    id?: IntFieldUpdateOperationsInput | number
    question?: StringFieldUpdateOperationsInput | string
    options?: TaskUpdateoptionsInput | string[]
    correctAnswer?: TaskUpdatecorrectAnswerInput | string[]
    type?: EnumTaskTypeFieldUpdateOperationsInput | $Enums.TaskType
    userAnswers?: UserTaskAnswerUncheckedUpdateManyWithoutTaskNestedInput
  }

  export type TaskUncheckedUpdateManyWithoutTestInput = {
    id?: IntFieldUpdateOperationsInput | number
    question?: StringFieldUpdateOperationsInput | string
    options?: TaskUpdateoptionsInput | string[]
    correctAnswer?: TaskUpdatecorrectAnswerInput | string[]
    type?: EnumTaskTypeFieldUpdateOperationsInput | $Enums.TaskType
  }

  export type UserTestProgressUpdateWithoutTestInput = {
    completed?: BoolFieldUpdateOperationsInput | boolean
    score?: NullableIntFieldUpdateOperationsInput | number | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneRequiredWithoutTestProgressNestedInput
  }

  export type UserTestProgressUncheckedUpdateWithoutTestInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    completed?: BoolFieldUpdateOperationsInput | boolean
    score?: NullableIntFieldUpdateOperationsInput | number | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserTestProgressUncheckedUpdateManyWithoutTestInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    completed?: BoolFieldUpdateOperationsInput | boolean
    score?: NullableIntFieldUpdateOperationsInput | number | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserTaskAnswerCreateManyTaskInput = {
    id?: number
    userId: number
    answer: string
    isCorrect: boolean
  }

  export type UserTaskAnswerUpdateWithoutTaskInput = {
    answer?: StringFieldUpdateOperationsInput | string
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneRequiredWithoutUserAnswersNestedInput
  }

  export type UserTaskAnswerUncheckedUpdateWithoutTaskInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    answer?: StringFieldUpdateOperationsInput | string
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserTaskAnswerUncheckedUpdateManyWithoutTaskInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    answer?: StringFieldUpdateOperationsInput | string
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserAchievementCreateManyAchievementInput = {
    id?: number
    userId: number
    receivedAt?: Date | string
  }

  export type UserAchievementUpdateWithoutAchievementInput = {
    receivedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutUserAchievementNestedInput
  }

  export type UserAchievementUncheckedUpdateWithoutAchievementInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    receivedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserAchievementUncheckedUpdateManyWithoutAchievementInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    receivedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}