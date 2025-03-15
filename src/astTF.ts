
export type Integer = {
  signed :boolean
}

export type Strng = {
  multiline :boolean
}

export type Literal = Integer | Strng

export type Expression = Literal

export type Data = {
  value :Expression
  read  :boolean
  write :boolean
}

export type Procedure = {
  name :string
}

export type Variable  = {
  data    :Data
  runtime :boolean
}

/**
 * @description Node declared/described at the toplevel of the source code
 * */
export type TopLevel = Procedure | Variable

/**
 * @description Entry point of an astTF file
 * */
export type astTF = Array<TopLevel>

