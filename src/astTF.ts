
export type LiteralValue = string

export type Integer = {
  signed  :boolean
  value   :LiteralValue
}

export type Strng = {
  multiline  :boolean
  value      :LiteralValue
}

export type Literal = Integer | Strng

export type Expression = Literal

export type Data = {
  value  :Expression
  read   :boolean
  write  :boolean
}

export type Procedure = {
  name :string
}

export type Variable  = {
  data     :Data
  runtime  :boolean
}


/**
 * @description Node declared/described at the toplevel of the source code
 * */
export type TopLevel = Procedure | Variable

/**
 * @description Identifier that represents the target language of the AST
 * @note The parser and code generators are responsible for creating a standard for the contents of this type.
 * */
export type Language = string | null

/**
 * @description Human-readable string that describes the contents of the file.
 * */
export type Description = string | null

/**
 * @description Metadata describing the contents of the file
 * */
export type Metadata = {
  language     :Language
  description  :Description
}

/**
 * @description Entry point of an astTF file
 * */
export type astTF = {
  metadata  :Metadata
  data      :Array<TopLevel>
}

