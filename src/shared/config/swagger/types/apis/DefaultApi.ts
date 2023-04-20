// TODO: better import syntax?
import { SecurityAuthentication } from "../auth/auth"
import { Configuration } from "../configuration"
import { HttpMethod, RequestContext, ResponseContext } from "../http/http"
import { AddItemDto } from "../models/AddItemDto"
import { AuthDto } from "../models/AuthDto"
import { CreateBrandDto } from "../models/CreateBrandDto"
import { CreateCategoryDto } from "../models/CreateCategoryDto"
import { CreateCommentDto } from "../models/CreateCommentDto"
import { CreateCommentReactionDto } from "../models/CreateCommentReactionDto"
import { CreateItemDto } from "../models/CreateItemDto"
import { CreateItemRatingDto } from "../models/CreateItemRatingDto"
import { CreateTypeDto } from "../models/CreateTypeDto"
import { EditUserDto } from "../models/EditUserDto"
import { ObjectSerializer } from "../models/ObjectSerializer"
import { SignInDto } from "../models/SignInDto"
import { UpdateBrandDto } from "../models/UpdateBrandDto"
import { UpdateCategoryDto } from "../models/UpdateCategoryDto"
import { UpdateCommentDto } from "../models/UpdateCommentDto"
import { UpdateItemDto } from "../models/UpdateItemDto"
import { UpdateTypeDto } from "../models/UpdateTypeDto"
import { isCodeInRange } from "../util"
import { BaseAPIRequestFactory, RequiredError } from "./baseapi"
import { ApiException } from "./exception"

/**
 * no description
 */
export class DefaultApiRequestFactory extends BaseAPIRequestFactory {
  /**
   * @param signInDto
   */
  public async authControllerSignin(
    signInDto: SignInDto,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration

    // verify required parameter 'signInDto' is not null or undefined
    if (signInDto === null || signInDto === undefined) {
      throw new RequiredError("DefaultApi", "authControllerSignin", "signInDto")
    }

    // Path Params
    const localVarPath = "/auth/signin"

    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST)
    requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType(["application/json"])
    requestContext.setHeaderParam("Content-Type", contentType)
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(signInDto, "SignInDto", ""),
      contentType
    )
    requestContext.setBody(serializedBody)

    const defaultAuth: SecurityAuthentication | undefined =
      _options?.authMethods?.default || this.configuration?.authMethods?.default
    if (defaultAuth?.applySecurityAuthentication) {
      await defaultAuth?.applySecurityAuthentication(requestContext)
    }

    return requestContext
  }

  /**
   * @param authDto
   */
  public async authControllerSignup(
    authDto: AuthDto,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration

    // verify required parameter 'authDto' is not null or undefined
    if (authDto === null || authDto === undefined) {
      throw new RequiredError("DefaultApi", "authControllerSignup", "authDto")
    }

    // Path Params
    const localVarPath = "/auth/signup"

    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST)
    requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType(["application/json"])
    requestContext.setHeaderParam("Content-Type", contentType)
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(authDto, "AuthDto", ""),
      contentType
    )
    requestContext.setBody(serializedBody)

    const defaultAuth: SecurityAuthentication | undefined =
      _options?.authMethods?.default || this.configuration?.authMethods?.default
    if (defaultAuth?.applySecurityAuthentication) {
      await defaultAuth?.applySecurityAuthentication(requestContext)
    }

    return requestContext
  }

  /**
   * @param createBrandDto
   */
  public async brandControllerCreateOne(
    createBrandDto: CreateBrandDto,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration

    // verify required parameter 'createBrandDto' is not null or undefined
    if (createBrandDto === null || createBrandDto === undefined) {
      throw new RequiredError("DefaultApi", "brandControllerCreateOne", "createBrandDto")
    }

    // Path Params
    const localVarPath = "/brands"

    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST)
    requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType(["application/json"])
    requestContext.setHeaderParam("Content-Type", contentType)
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(createBrandDto, "CreateBrandDto", ""),
      contentType
    )
    requestContext.setBody(serializedBody)

    const defaultAuth: SecurityAuthentication | undefined =
      _options?.authMethods?.default || this.configuration?.authMethods?.default
    if (defaultAuth?.applySecurityAuthentication) {
      await defaultAuth?.applySecurityAuthentication(requestContext)
    }

    return requestContext
  }

  /**
   * @param name
   */
  public async brandControllerFind(
    name: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration

    // verify required parameter 'name' is not null or undefined
    if (name === null || name === undefined) {
      throw new RequiredError("DefaultApi", "brandControllerFind", "name")
    }

    // Path Params
    const localVarPath = "/brands/{name}".replace(
      "{" + "name" + "}",
      encodeURIComponent(String(name))
    )

    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET)
    requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

    const defaultAuth: SecurityAuthentication | undefined =
      _options?.authMethods?.default || this.configuration?.authMethods?.default
    if (defaultAuth?.applySecurityAuthentication) {
      await defaultAuth?.applySecurityAuthentication(requestContext)
    }

    return requestContext
  }

  /**
   */
  public async brandControllerFindAll(_options?: Configuration): Promise<RequestContext> {
    const _config = _options || this.configuration

    // Path Params
    const localVarPath = "/brands"

    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET)
    requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

    const defaultAuth: SecurityAuthentication | undefined =
      _options?.authMethods?.default || this.configuration?.authMethods?.default
    if (defaultAuth?.applySecurityAuthentication) {
      await defaultAuth?.applySecurityAuthentication(requestContext)
    }

    return requestContext
  }

  /**
   * @param name
   */
  public async brandControllerRemove(
    name: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration

    // verify required parameter 'name' is not null or undefined
    if (name === null || name === undefined) {
      throw new RequiredError("DefaultApi", "brandControllerRemove", "name")
    }

    // Path Params
    const localVarPath = "/brands/{name}".replace(
      "{" + "name" + "}",
      encodeURIComponent(String(name))
    )

    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.DELETE)
    requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

    const defaultAuth: SecurityAuthentication | undefined =
      _options?.authMethods?.default || this.configuration?.authMethods?.default
    if (defaultAuth?.applySecurityAuthentication) {
      await defaultAuth?.applySecurityAuthentication(requestContext)
    }

    return requestContext
  }

  /**
   * @param name
   * @param updateBrandDto
   */
  public async brandControllerUpdate(
    name: string,
    updateBrandDto: UpdateBrandDto,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration

    // verify required parameter 'name' is not null or undefined
    if (name === null || name === undefined) {
      throw new RequiredError("DefaultApi", "brandControllerUpdate", "name")
    }

    // verify required parameter 'updateBrandDto' is not null or undefined
    if (updateBrandDto === null || updateBrandDto === undefined) {
      throw new RequiredError("DefaultApi", "brandControllerUpdate", "updateBrandDto")
    }

    // Path Params
    const localVarPath = "/brands/{name}".replace(
      "{" + "name" + "}",
      encodeURIComponent(String(name))
    )

    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PATCH)
    requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType(["application/json"])
    requestContext.setHeaderParam("Content-Type", contentType)
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(updateBrandDto, "UpdateBrandDto", ""),
      contentType
    )
    requestContext.setBody(serializedBody)

    const defaultAuth: SecurityAuthentication | undefined =
      _options?.authMethods?.default || this.configuration?.authMethods?.default
    if (defaultAuth?.applySecurityAuthentication) {
      await defaultAuth?.applySecurityAuthentication(requestContext)
    }

    return requestContext
  }

  /**
   * @param addItemDto
   */
  public async cartControllerAddItem(
    addItemDto: AddItemDto,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration

    // verify required parameter 'addItemDto' is not null or undefined
    if (addItemDto === null || addItemDto === undefined) {
      throw new RequiredError("DefaultApi", "cartControllerAddItem", "addItemDto")
    }

    // Path Params
    const localVarPath = "/cart"

    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST)
    requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType(["application/json"])
    requestContext.setHeaderParam("Content-Type", contentType)
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(addItemDto, "AddItemDto", ""),
      contentType
    )
    requestContext.setBody(serializedBody)

    const defaultAuth: SecurityAuthentication | undefined =
      _options?.authMethods?.default || this.configuration?.authMethods?.default
    if (defaultAuth?.applySecurityAuthentication) {
      await defaultAuth?.applySecurityAuthentication(requestContext)
    }

    return requestContext
  }

  /**
   */
  public async cartControllerEmpty(_options?: Configuration): Promise<RequestContext> {
    const _config = _options || this.configuration

    // Path Params
    const localVarPath = "/cart"

    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.DELETE)
    requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

    const defaultAuth: SecurityAuthentication | undefined =
      _options?.authMethods?.default || this.configuration?.authMethods?.default
    if (defaultAuth?.applySecurityAuthentication) {
      await defaultAuth?.applySecurityAuthentication(requestContext)
    }

    return requestContext
  }

  /**
   */
  public async cartControllerGetAllItems(_options?: Configuration): Promise<RequestContext> {
    const _config = _options || this.configuration

    // Path Params
    const localVarPath = "/cart"

    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET)
    requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

    const defaultAuth: SecurityAuthentication | undefined =
      _options?.authMethods?.default || this.configuration?.authMethods?.default
    if (defaultAuth?.applySecurityAuthentication) {
      await defaultAuth?.applySecurityAuthentication(requestContext)
    }

    return requestContext
  }

  /**
   * @param itemId
   */
  public async cartControllerRemoveItem(
    itemId: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration

    // verify required parameter 'itemId' is not null or undefined
    if (itemId === null || itemId === undefined) {
      throw new RequiredError("DefaultApi", "cartControllerRemoveItem", "itemId")
    }

    // Path Params
    const localVarPath = "/cart/{item_id}".replace(
      "{" + "item_id" + "}",
      encodeURIComponent(String(itemId))
    )

    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.DELETE)
    requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

    const defaultAuth: SecurityAuthentication | undefined =
      _options?.authMethods?.default || this.configuration?.authMethods?.default
    if (defaultAuth?.applySecurityAuthentication) {
      await defaultAuth?.applySecurityAuthentication(requestContext)
    }

    return requestContext
  }

  /**
   * @param itemId
   * @param updateItemDto
   */
  public async cartControllerUpdateItem(
    itemId: string,
    updateItemDto: UpdateItemDto,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration

    // verify required parameter 'itemId' is not null or undefined
    if (itemId === null || itemId === undefined) {
      throw new RequiredError("DefaultApi", "cartControllerUpdateItem", "itemId")
    }

    // verify required parameter 'updateItemDto' is not null or undefined
    if (updateItemDto === null || updateItemDto === undefined) {
      throw new RequiredError("DefaultApi", "cartControllerUpdateItem", "updateItemDto")
    }

    // Path Params
    const localVarPath = "/cart/{item_id}".replace(
      "{" + "item_id" + "}",
      encodeURIComponent(String(itemId))
    )

    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PATCH)
    requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType(["application/json"])
    requestContext.setHeaderParam("Content-Type", contentType)
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(updateItemDto, "UpdateItemDto", ""),
      contentType
    )
    requestContext.setBody(serializedBody)

    const defaultAuth: SecurityAuthentication | undefined =
      _options?.authMethods?.default || this.configuration?.authMethods?.default
    if (defaultAuth?.applySecurityAuthentication) {
      await defaultAuth?.applySecurityAuthentication(requestContext)
    }

    return requestContext
  }

  /**
   * @param createCategoryDto
   */
  public async categoryControllerCreateOne(
    createCategoryDto: CreateCategoryDto,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration

    // verify required parameter 'createCategoryDto' is not null or undefined
    if (createCategoryDto === null || createCategoryDto === undefined) {
      throw new RequiredError("DefaultApi", "categoryControllerCreateOne", "createCategoryDto")
    }

    // Path Params
    const localVarPath = "/categories"

    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST)
    requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType(["application/json"])
    requestContext.setHeaderParam("Content-Type", contentType)
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(createCategoryDto, "CreateCategoryDto", ""),
      contentType
    )
    requestContext.setBody(serializedBody)

    const defaultAuth: SecurityAuthentication | undefined =
      _options?.authMethods?.default || this.configuration?.authMethods?.default
    if (defaultAuth?.applySecurityAuthentication) {
      await defaultAuth?.applySecurityAuthentication(requestContext)
    }

    return requestContext
  }

  /**
   * @param name
   */
  public async categoryControllerFind(
    name: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration

    // verify required parameter 'name' is not null or undefined
    if (name === null || name === undefined) {
      throw new RequiredError("DefaultApi", "categoryControllerFind", "name")
    }

    // Path Params
    const localVarPath = "/categories/{name}".replace(
      "{" + "name" + "}",
      encodeURIComponent(String(name))
    )

    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET)
    requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

    const defaultAuth: SecurityAuthentication | undefined =
      _options?.authMethods?.default || this.configuration?.authMethods?.default
    if (defaultAuth?.applySecurityAuthentication) {
      await defaultAuth?.applySecurityAuthentication(requestContext)
    }

    return requestContext
  }

  /**
   */
  public async categoryControllerFindAll(_options?: Configuration): Promise<RequestContext> {
    const _config = _options || this.configuration

    // Path Params
    const localVarPath = "/categories"

    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET)
    requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

    const defaultAuth: SecurityAuthentication | undefined =
      _options?.authMethods?.default || this.configuration?.authMethods?.default
    if (defaultAuth?.applySecurityAuthentication) {
      await defaultAuth?.applySecurityAuthentication(requestContext)
    }

    return requestContext
  }

  /**
   * @param name
   */
  public async categoryControllerRemove(
    name: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration

    // verify required parameter 'name' is not null or undefined
    if (name === null || name === undefined) {
      throw new RequiredError("DefaultApi", "categoryControllerRemove", "name")
    }

    // Path Params
    const localVarPath = "/categories/{name}".replace(
      "{" + "name" + "}",
      encodeURIComponent(String(name))
    )

    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.DELETE)
    requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

    const defaultAuth: SecurityAuthentication | undefined =
      _options?.authMethods?.default || this.configuration?.authMethods?.default
    if (defaultAuth?.applySecurityAuthentication) {
      await defaultAuth?.applySecurityAuthentication(requestContext)
    }

    return requestContext
  }

  /**
   * @param name
   * @param updateCategoryDto
   */
  public async categoryControllerUpdate(
    name: string,
    updateCategoryDto: UpdateCategoryDto,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration

    // verify required parameter 'name' is not null or undefined
    if (name === null || name === undefined) {
      throw new RequiredError("DefaultApi", "categoryControllerUpdate", "name")
    }

    // verify required parameter 'updateCategoryDto' is not null or undefined
    if (updateCategoryDto === null || updateCategoryDto === undefined) {
      throw new RequiredError("DefaultApi", "categoryControllerUpdate", "updateCategoryDto")
    }

    // Path Params
    const localVarPath = "/categories/{name}".replace(
      "{" + "name" + "}",
      encodeURIComponent(String(name))
    )

    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PATCH)
    requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType(["application/json"])
    requestContext.setHeaderParam("Content-Type", contentType)
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(updateCategoryDto, "UpdateCategoryDto", ""),
      contentType
    )
    requestContext.setBody(serializedBody)

    const defaultAuth: SecurityAuthentication | undefined =
      _options?.authMethods?.default || this.configuration?.authMethods?.default
    if (defaultAuth?.applySecurityAuthentication) {
      await defaultAuth?.applySecurityAuthentication(requestContext)
    }

    return requestContext
  }

  /**
   * @param id
   * @param createCommentReactionDto
   */
  public async commentReactionControllerCreate(
    id: string,
    createCommentReactionDto: CreateCommentReactionDto,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration

    // verify required parameter 'id' is not null or undefined
    if (id === null || id === undefined) {
      throw new RequiredError("DefaultApi", "commentReactionControllerCreate", "id")
    }

    // verify required parameter 'createCommentReactionDto' is not null or undefined
    if (createCommentReactionDto === null || createCommentReactionDto === undefined) {
      throw new RequiredError(
        "DefaultApi",
        "commentReactionControllerCreate",
        "createCommentReactionDto"
      )
    }

    // Path Params
    const localVarPath = "/comments/reaction/{id}".replace(
      "{" + "id" + "}",
      encodeURIComponent(String(id))
    )

    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST)
    requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType(["application/json"])
    requestContext.setHeaderParam("Content-Type", contentType)
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(createCommentReactionDto, "CreateCommentReactionDto", ""),
      contentType
    )
    requestContext.setBody(serializedBody)

    const defaultAuth: SecurityAuthentication | undefined =
      _options?.authMethods?.default || this.configuration?.authMethods?.default
    if (defaultAuth?.applySecurityAuthentication) {
      await defaultAuth?.applySecurityAuthentication(requestContext)
    }

    return requestContext
  }

  /**
   * @param id
   */
  public async commentReactionControllerGetReactionsSum(
    id: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration

    // verify required parameter 'id' is not null or undefined
    if (id === null || id === undefined) {
      throw new RequiredError("DefaultApi", "commentReactionControllerGetReactionsSum", "id")
    }

    // Path Params
    const localVarPath = "/comments/reaction/{id}".replace(
      "{" + "id" + "}",
      encodeURIComponent(String(id))
    )

    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET)
    requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

    const defaultAuth: SecurityAuthentication | undefined =
      _options?.authMethods?.default || this.configuration?.authMethods?.default
    if (defaultAuth?.applySecurityAuthentication) {
      await defaultAuth?.applySecurityAuthentication(requestContext)
    }

    return requestContext
  }

  /**
   * @param createCommentDto
   */
  public async commentsControllerCreate(
    createCommentDto: CreateCommentDto,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration

    // verify required parameter 'createCommentDto' is not null or undefined
    if (createCommentDto === null || createCommentDto === undefined) {
      throw new RequiredError("DefaultApi", "commentsControllerCreate", "createCommentDto")
    }

    // Path Params
    const localVarPath = "/comments"

    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST)
    requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType(["application/json"])
    requestContext.setHeaderParam("Content-Type", contentType)
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(createCommentDto, "CreateCommentDto", ""),
      contentType
    )
    requestContext.setBody(serializedBody)

    const defaultAuth: SecurityAuthentication | undefined =
      _options?.authMethods?.default || this.configuration?.authMethods?.default
    if (defaultAuth?.applySecurityAuthentication) {
      await defaultAuth?.applySecurityAuthentication(requestContext)
    }

    return requestContext
  }

  /**
   * @param parentId
   * @param createCommentDto
   */
  public async commentsControllerCreateReply(
    parentId: string,
    createCommentDto: CreateCommentDto,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration

    // verify required parameter 'parentId' is not null or undefined
    if (parentId === null || parentId === undefined) {
      throw new RequiredError("DefaultApi", "commentsControllerCreateReply", "parentId")
    }

    // verify required parameter 'createCommentDto' is not null or undefined
    if (createCommentDto === null || createCommentDto === undefined) {
      throw new RequiredError("DefaultApi", "commentsControllerCreateReply", "createCommentDto")
    }

    // Path Params
    const localVarPath = "/comments/{parentId}".replace(
      "{" + "parentId" + "}",
      encodeURIComponent(String(parentId))
    )

    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST)
    requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType(["application/json"])
    requestContext.setHeaderParam("Content-Type", contentType)
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(createCommentDto, "CreateCommentDto", ""),
      contentType
    )
    requestContext.setBody(serializedBody)

    const defaultAuth: SecurityAuthentication | undefined =
      _options?.authMethods?.default || this.configuration?.authMethods?.default
    if (defaultAuth?.applySecurityAuthentication) {
      await defaultAuth?.applySecurityAuthentication(requestContext)
    }

    return requestContext
  }

  /**
   */
  public async commentsControllerFindAll(_options?: Configuration): Promise<RequestContext> {
    const _config = _options || this.configuration

    // Path Params
    const localVarPath = "/comments"

    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET)
    requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

    const defaultAuth: SecurityAuthentication | undefined =
      _options?.authMethods?.default || this.configuration?.authMethods?.default
    if (defaultAuth?.applySecurityAuthentication) {
      await defaultAuth?.applySecurityAuthentication(requestContext)
    }

    return requestContext
  }

  /**
   * @param id
   */
  public async commentsControllerRemove(
    id: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration

    // verify required parameter 'id' is not null or undefined
    if (id === null || id === undefined) {
      throw new RequiredError("DefaultApi", "commentsControllerRemove", "id")
    }

    // Path Params
    const localVarPath = "/comments/{id}".replace("{" + "id" + "}", encodeURIComponent(String(id)))

    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.DELETE)
    requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

    const defaultAuth: SecurityAuthentication | undefined =
      _options?.authMethods?.default || this.configuration?.authMethods?.default
    if (defaultAuth?.applySecurityAuthentication) {
      await defaultAuth?.applySecurityAuthentication(requestContext)
    }

    return requestContext
  }

  /**
   * @param id
   * @param updateCommentDto
   */
  public async commentsControllerUpdate(
    id: string,
    updateCommentDto: UpdateCommentDto,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration

    // verify required parameter 'id' is not null or undefined
    if (id === null || id === undefined) {
      throw new RequiredError("DefaultApi", "commentsControllerUpdate", "id")
    }

    // verify required parameter 'updateCommentDto' is not null or undefined
    if (updateCommentDto === null || updateCommentDto === undefined) {
      throw new RequiredError("DefaultApi", "commentsControllerUpdate", "updateCommentDto")
    }

    // Path Params
    const localVarPath = "/comments/{id}".replace("{" + "id" + "}", encodeURIComponent(String(id)))

    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PATCH)
    requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType(["application/json"])
    requestContext.setHeaderParam("Content-Type", contentType)
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(updateCommentDto, "UpdateCommentDto", ""),
      contentType
    )
    requestContext.setBody(serializedBody)

    const defaultAuth: SecurityAuthentication | undefined =
      _options?.authMethods?.default || this.configuration?.authMethods?.default
    if (defaultAuth?.applySecurityAuthentication) {
      await defaultAuth?.applySecurityAuthentication(requestContext)
    }

    return requestContext
  }

  /**
   */
  public async googleAuthControllerSignin(_options?: Configuration): Promise<RequestContext> {
    const _config = _options || this.configuration

    // Path Params
    const localVarPath = "/auth/google"

    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET)
    requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

    const defaultAuth: SecurityAuthentication | undefined =
      _options?.authMethods?.default || this.configuration?.authMethods?.default
    if (defaultAuth?.applySecurityAuthentication) {
      await defaultAuth?.applySecurityAuthentication(requestContext)
    }

    return requestContext
  }

  /**
   */
  public async googleAuthControllerSignup(_options?: Configuration): Promise<RequestContext> {
    const _config = _options || this.configuration

    // Path Params
    const localVarPath = "/auth/google/signup"

    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET)
    requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

    const defaultAuth: SecurityAuthentication | undefined =
      _options?.authMethods?.default || this.configuration?.authMethods?.default
    if (defaultAuth?.applySecurityAuthentication) {
      await defaultAuth?.applySecurityAuthentication(requestContext)
    }

    return requestContext
  }

  /**
   * @param createItemDto
   */
  public async itemControllerCreate(
    createItemDto: CreateItemDto,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration

    // verify required parameter 'createItemDto' is not null or undefined
    if (createItemDto === null || createItemDto === undefined) {
      throw new RequiredError("DefaultApi", "itemControllerCreate", "createItemDto")
    }

    // Path Params
    const localVarPath = "/items"

    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST)
    requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType(["application/json"])
    requestContext.setHeaderParam("Content-Type", contentType)
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(createItemDto, "CreateItemDto", ""),
      contentType
    )
    requestContext.setBody(serializedBody)

    const defaultAuth: SecurityAuthentication | undefined =
      _options?.authMethods?.default || this.configuration?.authMethods?.default
    if (defaultAuth?.applySecurityAuthentication) {
      await defaultAuth?.applySecurityAuthentication(requestContext)
    }

    return requestContext
  }

  /**
   */
  public async itemControllerFindAll(_options?: Configuration): Promise<RequestContext> {
    const _config = _options || this.configuration

    // Path Params
    const localVarPath = "/items"

    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET)
    requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

    const defaultAuth: SecurityAuthentication | undefined =
      _options?.authMethods?.default || this.configuration?.authMethods?.default
    if (defaultAuth?.applySecurityAuthentication) {
      await defaultAuth?.applySecurityAuthentication(requestContext)
    }

    return requestContext
  }

  /**
   * @param id
   */
  public async itemControllerFindById(
    id: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration

    // verify required parameter 'id' is not null or undefined
    if (id === null || id === undefined) {
      throw new RequiredError("DefaultApi", "itemControllerFindById", "id")
    }

    // Path Params
    const localVarPath = "/items/{id}".replace("{" + "id" + "}", encodeURIComponent(String(id)))

    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET)
    requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

    const defaultAuth: SecurityAuthentication | undefined =
      _options?.authMethods?.default || this.configuration?.authMethods?.default
    if (defaultAuth?.applySecurityAuthentication) {
      await defaultAuth?.applySecurityAuthentication(requestContext)
    }

    return requestContext
  }

  /**
   * @param id
   */
  public async itemControllerRemove(id: string, _options?: Configuration): Promise<RequestContext> {
    const _config = _options || this.configuration

    // verify required parameter 'id' is not null or undefined
    if (id === null || id === undefined) {
      throw new RequiredError("DefaultApi", "itemControllerRemove", "id")
    }

    // Path Params
    const localVarPath = "/items/{id}".replace("{" + "id" + "}", encodeURIComponent(String(id)))

    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.DELETE)
    requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

    const defaultAuth: SecurityAuthentication | undefined =
      _options?.authMethods?.default || this.configuration?.authMethods?.default
    if (defaultAuth?.applySecurityAuthentication) {
      await defaultAuth?.applySecurityAuthentication(requestContext)
    }

    return requestContext
  }

  /**
   * @param id
   * @param updateItemDto
   */
  public async itemControllerUpdate(
    id: string,
    updateItemDto: UpdateItemDto,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration

    // verify required parameter 'id' is not null or undefined
    if (id === null || id === undefined) {
      throw new RequiredError("DefaultApi", "itemControllerUpdate", "id")
    }

    // verify required parameter 'updateItemDto' is not null or undefined
    if (updateItemDto === null || updateItemDto === undefined) {
      throw new RequiredError("DefaultApi", "itemControllerUpdate", "updateItemDto")
    }

    // Path Params
    const localVarPath = "/items/{id}".replace("{" + "id" + "}", encodeURIComponent(String(id)))

    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PATCH)
    requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType(["application/json"])
    requestContext.setHeaderParam("Content-Type", contentType)
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(updateItemDto, "UpdateItemDto", ""),
      contentType
    )
    requestContext.setBody(serializedBody)

    const defaultAuth: SecurityAuthentication | undefined =
      _options?.authMethods?.default || this.configuration?.authMethods?.default
    if (defaultAuth?.applySecurityAuthentication) {
      await defaultAuth?.applySecurityAuthentication(requestContext)
    }

    return requestContext
  }

  /**
   * @param id
   * @param createItemRatingDto
   */
  public async itemRatingControllerCreate(
    id: string,
    createItemRatingDto: CreateItemRatingDto,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration

    // verify required parameter 'id' is not null or undefined
    if (id === null || id === undefined) {
      throw new RequiredError("DefaultApi", "itemRatingControllerCreate", "id")
    }

    // verify required parameter 'createItemRatingDto' is not null or undefined
    if (createItemRatingDto === null || createItemRatingDto === undefined) {
      throw new RequiredError("DefaultApi", "itemRatingControllerCreate", "createItemRatingDto")
    }

    // Path Params
    const localVarPath = "/items/rating/{id}".replace(
      "{" + "id" + "}",
      encodeURIComponent(String(id))
    )

    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST)
    requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType(["application/json"])
    requestContext.setHeaderParam("Content-Type", contentType)
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(createItemRatingDto, "CreateItemRatingDto", ""),
      contentType
    )
    requestContext.setBody(serializedBody)

    const defaultAuth: SecurityAuthentication | undefined =
      _options?.authMethods?.default || this.configuration?.authMethods?.default
    if (defaultAuth?.applySecurityAuthentication) {
      await defaultAuth?.applySecurityAuthentication(requestContext)
    }

    return requestContext
  }

  /**
   * @param id
   */
  public async itemRatingControllerGetAvgRating(
    id: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration

    // verify required parameter 'id' is not null or undefined
    if (id === null || id === undefined) {
      throw new RequiredError("DefaultApi", "itemRatingControllerGetAvgRating", "id")
    }

    // Path Params
    const localVarPath = "/items/rating/{id}".replace(
      "{" + "id" + "}",
      encodeURIComponent(String(id))
    )

    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET)
    requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

    const defaultAuth: SecurityAuthentication | undefined =
      _options?.authMethods?.default || this.configuration?.authMethods?.default
    if (defaultAuth?.applySecurityAuthentication) {
      await defaultAuth?.applySecurityAuthentication(requestContext)
    }

    return requestContext
  }

  /**
   * @param createTypeDto
   */
  public async typeControllerCreateOne(
    createTypeDto: CreateTypeDto,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration

    // verify required parameter 'createTypeDto' is not null or undefined
    if (createTypeDto === null || createTypeDto === undefined) {
      throw new RequiredError("DefaultApi", "typeControllerCreateOne", "createTypeDto")
    }

    // Path Params
    const localVarPath = "/types"

    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST)
    requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType(["application/json"])
    requestContext.setHeaderParam("Content-Type", contentType)
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(createTypeDto, "CreateTypeDto", ""),
      contentType
    )
    requestContext.setBody(serializedBody)

    const defaultAuth: SecurityAuthentication | undefined =
      _options?.authMethods?.default || this.configuration?.authMethods?.default
    if (defaultAuth?.applySecurityAuthentication) {
      await defaultAuth?.applySecurityAuthentication(requestContext)
    }

    return requestContext
  }

  /**
   * @param name
   */
  public async typeControllerFind(name: string, _options?: Configuration): Promise<RequestContext> {
    const _config = _options || this.configuration

    // verify required parameter 'name' is not null or undefined
    if (name === null || name === undefined) {
      throw new RequiredError("DefaultApi", "typeControllerFind", "name")
    }

    // Path Params
    const localVarPath = "/types/{name}".replace(
      "{" + "name" + "}",
      encodeURIComponent(String(name))
    )

    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET)
    requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

    const defaultAuth: SecurityAuthentication | undefined =
      _options?.authMethods?.default || this.configuration?.authMethods?.default
    if (defaultAuth?.applySecurityAuthentication) {
      await defaultAuth?.applySecurityAuthentication(requestContext)
    }

    return requestContext
  }

  /**
   */
  public async typeControllerFindAll(_options?: Configuration): Promise<RequestContext> {
    const _config = _options || this.configuration

    // Path Params
    const localVarPath = "/types"

    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET)
    requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

    const defaultAuth: SecurityAuthentication | undefined =
      _options?.authMethods?.default || this.configuration?.authMethods?.default
    if (defaultAuth?.applySecurityAuthentication) {
      await defaultAuth?.applySecurityAuthentication(requestContext)
    }

    return requestContext
  }

  /**
   * @param name
   */
  public async typeControllerRemove(
    name: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration

    // verify required parameter 'name' is not null or undefined
    if (name === null || name === undefined) {
      throw new RequiredError("DefaultApi", "typeControllerRemove", "name")
    }

    // Path Params
    const localVarPath = "/types/{name}".replace(
      "{" + "name" + "}",
      encodeURIComponent(String(name))
    )

    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.DELETE)
    requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

    const defaultAuth: SecurityAuthentication | undefined =
      _options?.authMethods?.default || this.configuration?.authMethods?.default
    if (defaultAuth?.applySecurityAuthentication) {
      await defaultAuth?.applySecurityAuthentication(requestContext)
    }

    return requestContext
  }

  /**
   * @param name
   * @param updateTypeDto
   */
  public async typeControllerUpdate(
    name: string,
    updateTypeDto: UpdateTypeDto,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration

    // verify required parameter 'name' is not null or undefined
    if (name === null || name === undefined) {
      throw new RequiredError("DefaultApi", "typeControllerUpdate", "name")
    }

    // verify required parameter 'updateTypeDto' is not null or undefined
    if (updateTypeDto === null || updateTypeDto === undefined) {
      throw new RequiredError("DefaultApi", "typeControllerUpdate", "updateTypeDto")
    }

    // Path Params
    const localVarPath = "/types/{name}".replace(
      "{" + "name" + "}",
      encodeURIComponent(String(name))
    )

    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PATCH)
    requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType(["application/json"])
    requestContext.setHeaderParam("Content-Type", contentType)
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(updateTypeDto, "UpdateTypeDto", ""),
      contentType
    )
    requestContext.setBody(serializedBody)

    const defaultAuth: SecurityAuthentication | undefined =
      _options?.authMethods?.default || this.configuration?.authMethods?.default
    if (defaultAuth?.applySecurityAuthentication) {
      await defaultAuth?.applySecurityAuthentication(requestContext)
    }

    return requestContext
  }

  /**
   * @param editUserDto
   */
  public async userControllerEditSelf(
    editUserDto: EditUserDto,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration

    // verify required parameter 'editUserDto' is not null or undefined
    if (editUserDto === null || editUserDto === undefined) {
      throw new RequiredError("DefaultApi", "userControllerEditSelf", "editUserDto")
    }

    // Path Params
    const localVarPath = "/users/self"

    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PATCH)
    requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType(["application/json"])
    requestContext.setHeaderParam("Content-Type", contentType)
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(editUserDto, "EditUserDto", ""),
      contentType
    )
    requestContext.setBody(serializedBody)

    const defaultAuth: SecurityAuthentication | undefined =
      _options?.authMethods?.default || this.configuration?.authMethods?.default
    if (defaultAuth?.applySecurityAuthentication) {
      await defaultAuth?.applySecurityAuthentication(requestContext)
    }

    return requestContext
  }

  /**
   */
  public async userControllerGetSelf(_options?: Configuration): Promise<RequestContext> {
    const _config = _options || this.configuration

    // Path Params
    const localVarPath = "/users"

    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET)
    requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

    const defaultAuth: SecurityAuthentication | undefined =
      _options?.authMethods?.default || this.configuration?.authMethods?.default
    if (defaultAuth?.applySecurityAuthentication) {
      await defaultAuth?.applySecurityAuthentication(requestContext)
    }

    return requestContext
  }

  /**
   * @param userName
   */
  public async userControllerGetUserByUsername(
    userName: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration

    // verify required parameter 'userName' is not null or undefined
    if (userName === null || userName === undefined) {
      throw new RequiredError("DefaultApi", "userControllerGetUserByUsername", "userName")
    }

    // Path Params
    const localVarPath = "/users/{userName}".replace(
      "{" + "userName" + "}",
      encodeURIComponent(String(userName))
    )

    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET)
    requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

    const defaultAuth: SecurityAuthentication | undefined =
      _options?.authMethods?.default || this.configuration?.authMethods?.default
    if (defaultAuth?.applySecurityAuthentication) {
      await defaultAuth?.applySecurityAuthentication(requestContext)
    }

    return requestContext
  }
}

export class DefaultApiResponseProcessor {
  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to authControllerSignin
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async authControllerSignin(response: ResponseContext): Promise<any> {
    const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"])
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: any = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "any",
        ""
      ) as any
      return body
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: any = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "any",
        ""
      ) as any
      return body
    }

    throw new ApiException<string | Blob | undefined>(
      response.httpStatusCode,
      "Unknown API Status Code!",
      await response.getBodyAsAny(),
      response.headers
    )
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to authControllerSignup
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async authControllerSignup(response: ResponseContext): Promise<any> {
    const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"])
    if (isCodeInRange("201", response.httpStatusCode)) {
      const body: any = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "any",
        ""
      ) as any
      return body
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: any = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "any",
        ""
      ) as any
      return body
    }

    throw new ApiException<string | Blob | undefined>(
      response.httpStatusCode,
      "Unknown API Status Code!",
      await response.getBodyAsAny(),
      response.headers
    )
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to brandControllerCreateOne
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async brandControllerCreateOne(response: ResponseContext): Promise<any> {
    const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"])
    if (isCodeInRange("201", response.httpStatusCode)) {
      const body: any = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "any",
        ""
      ) as any
      return body
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: any = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "any",
        ""
      ) as any
      return body
    }

    throw new ApiException<string | Blob | undefined>(
      response.httpStatusCode,
      "Unknown API Status Code!",
      await response.getBodyAsAny(),
      response.headers
    )
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to brandControllerFind
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async brandControllerFind(response: ResponseContext): Promise<any> {
    const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"])
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: any = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "any",
        ""
      ) as any
      return body
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: any = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "any",
        ""
      ) as any
      return body
    }

    throw new ApiException<string | Blob | undefined>(
      response.httpStatusCode,
      "Unknown API Status Code!",
      await response.getBodyAsAny(),
      response.headers
    )
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to brandControllerFindAll
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async brandControllerFindAll(response: ResponseContext): Promise<Array<any>> {
    const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"])
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: Array<any> = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "Array<any>",
        ""
      ) as Array<any>
      return body
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: Array<any> = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "Array<any>",
        ""
      ) as Array<any>
      return body
    }

    throw new ApiException<string | Blob | undefined>(
      response.httpStatusCode,
      "Unknown API Status Code!",
      await response.getBodyAsAny(),
      response.headers
    )
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to brandControllerRemove
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async brandControllerRemove(response: ResponseContext): Promise<any> {
    const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"])
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: any = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "any",
        ""
      ) as any
      return body
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: any = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "any",
        ""
      ) as any
      return body
    }

    throw new ApiException<string | Blob | undefined>(
      response.httpStatusCode,
      "Unknown API Status Code!",
      await response.getBodyAsAny(),
      response.headers
    )
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to brandControllerUpdate
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async brandControllerUpdate(response: ResponseContext): Promise<any> {
    const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"])
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: any = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "any",
        ""
      ) as any
      return body
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: any = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "any",
        ""
      ) as any
      return body
    }

    throw new ApiException<string | Blob | undefined>(
      response.httpStatusCode,
      "Unknown API Status Code!",
      await response.getBodyAsAny(),
      response.headers
    )
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to cartControllerAddItem
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async cartControllerAddItem(response: ResponseContext): Promise<any> {
    const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"])
    if (isCodeInRange("201", response.httpStatusCode)) {
      const body: any = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "any",
        ""
      ) as any
      return body
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: any = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "any",
        ""
      ) as any
      return body
    }

    throw new ApiException<string | Blob | undefined>(
      response.httpStatusCode,
      "Unknown API Status Code!",
      await response.getBodyAsAny(),
      response.headers
    )
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to cartControllerEmpty
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async cartControllerEmpty(response: ResponseContext): Promise<any> {
    const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"])
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: any = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "any",
        ""
      ) as any
      return body
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: any = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "any",
        ""
      ) as any
      return body
    }

    throw new ApiException<string | Blob | undefined>(
      response.httpStatusCode,
      "Unknown API Status Code!",
      await response.getBodyAsAny(),
      response.headers
    )
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to cartControllerGetAllItems
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async cartControllerGetAllItems(response: ResponseContext): Promise<Array<any>> {
    const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"])
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: Array<any> = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "Array<any>",
        ""
      ) as Array<any>
      return body
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: Array<any> = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "Array<any>",
        ""
      ) as Array<any>
      return body
    }

    throw new ApiException<string | Blob | undefined>(
      response.httpStatusCode,
      "Unknown API Status Code!",
      await response.getBodyAsAny(),
      response.headers
    )
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to cartControllerRemoveItem
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async cartControllerRemoveItem(response: ResponseContext): Promise<any> {
    const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"])
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: any = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "any",
        ""
      ) as any
      return body
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: any = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "any",
        ""
      ) as any
      return body
    }

    throw new ApiException<string | Blob | undefined>(
      response.httpStatusCode,
      "Unknown API Status Code!",
      await response.getBodyAsAny(),
      response.headers
    )
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to cartControllerUpdateItem
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async cartControllerUpdateItem(response: ResponseContext): Promise<any> {
    const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"])
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: any = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "any",
        ""
      ) as any
      return body
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: any = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "any",
        ""
      ) as any
      return body
    }

    throw new ApiException<string | Blob | undefined>(
      response.httpStatusCode,
      "Unknown API Status Code!",
      await response.getBodyAsAny(),
      response.headers
    )
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to categoryControllerCreateOne
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async categoryControllerCreateOne(response: ResponseContext): Promise<any> {
    const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"])
    if (isCodeInRange("201", response.httpStatusCode)) {
      const body: any = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "any",
        ""
      ) as any
      return body
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: any = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "any",
        ""
      ) as any
      return body
    }

    throw new ApiException<string | Blob | undefined>(
      response.httpStatusCode,
      "Unknown API Status Code!",
      await response.getBodyAsAny(),
      response.headers
    )
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to categoryControllerFind
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async categoryControllerFind(response: ResponseContext): Promise<any> {
    const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"])
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: any = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "any",
        ""
      ) as any
      return body
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: any = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "any",
        ""
      ) as any
      return body
    }

    throw new ApiException<string | Blob | undefined>(
      response.httpStatusCode,
      "Unknown API Status Code!",
      await response.getBodyAsAny(),
      response.headers
    )
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to categoryControllerFindAll
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async categoryControllerFindAll(response: ResponseContext): Promise<Array<any>> {
    const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"])
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: Array<any> = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "Array<any>",
        ""
      ) as Array<any>
      return body
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: Array<any> = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "Array<any>",
        ""
      ) as Array<any>
      return body
    }

    throw new ApiException<string | Blob | undefined>(
      response.httpStatusCode,
      "Unknown API Status Code!",
      await response.getBodyAsAny(),
      response.headers
    )
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to categoryControllerRemove
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async categoryControllerRemove(response: ResponseContext): Promise<any> {
    const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"])
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: any = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "any",
        ""
      ) as any
      return body
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: any = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "any",
        ""
      ) as any
      return body
    }

    throw new ApiException<string | Blob | undefined>(
      response.httpStatusCode,
      "Unknown API Status Code!",
      await response.getBodyAsAny(),
      response.headers
    )
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to categoryControllerUpdate
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async categoryControllerUpdate(response: ResponseContext): Promise<any> {
    const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"])
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: any = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "any",
        ""
      ) as any
      return body
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: any = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "any",
        ""
      ) as any
      return body
    }

    throw new ApiException<string | Blob | undefined>(
      response.httpStatusCode,
      "Unknown API Status Code!",
      await response.getBodyAsAny(),
      response.headers
    )
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to commentReactionControllerCreate
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async commentReactionControllerCreate(response: ResponseContext): Promise<any> {
    const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"])
    if (isCodeInRange("201", response.httpStatusCode)) {
      const body: any = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "any",
        ""
      ) as any
      return body
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: any = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "any",
        ""
      ) as any
      return body
    }

    throw new ApiException<string | Blob | undefined>(
      response.httpStatusCode,
      "Unknown API Status Code!",
      await response.getBodyAsAny(),
      response.headers
    )
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to commentReactionControllerGetReactionsSum
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async commentReactionControllerGetReactionsSum(
    response: ResponseContext
  ): Promise<number> {
    const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"])
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: number = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "number",
        ""
      ) as number
      return body
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: number = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "number",
        ""
      ) as number
      return body
    }

    throw new ApiException<string | Blob | undefined>(
      response.httpStatusCode,
      "Unknown API Status Code!",
      await response.getBodyAsAny(),
      response.headers
    )
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to commentsControllerCreate
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async commentsControllerCreate(response: ResponseContext): Promise<any> {
    const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"])
    if (isCodeInRange("201", response.httpStatusCode)) {
      const body: any = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "any",
        ""
      ) as any
      return body
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: any = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "any",
        ""
      ) as any
      return body
    }

    throw new ApiException<string | Blob | undefined>(
      response.httpStatusCode,
      "Unknown API Status Code!",
      await response.getBodyAsAny(),
      response.headers
    )
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to commentsControllerCreateReply
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async commentsControllerCreateReply(response: ResponseContext): Promise<any> {
    const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"])
    if (isCodeInRange("201", response.httpStatusCode)) {
      const body: any = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "any",
        ""
      ) as any
      return body
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: any = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "any",
        ""
      ) as any
      return body
    }

    throw new ApiException<string | Blob | undefined>(
      response.httpStatusCode,
      "Unknown API Status Code!",
      await response.getBodyAsAny(),
      response.headers
    )
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to commentsControllerFindAll
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async commentsControllerFindAll(response: ResponseContext): Promise<Array<any>> {
    const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"])
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: Array<any> = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "Array<any>",
        ""
      ) as Array<any>
      return body
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: Array<any> = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "Array<any>",
        ""
      ) as Array<any>
      return body
    }

    throw new ApiException<string | Blob | undefined>(
      response.httpStatusCode,
      "Unknown API Status Code!",
      await response.getBodyAsAny(),
      response.headers
    )
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to commentsControllerRemove
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async commentsControllerRemove(response: ResponseContext): Promise<any> {
    const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"])
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: any = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "any",
        ""
      ) as any
      return body
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: any = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "any",
        ""
      ) as any
      return body
    }

    throw new ApiException<string | Blob | undefined>(
      response.httpStatusCode,
      "Unknown API Status Code!",
      await response.getBodyAsAny(),
      response.headers
    )
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to commentsControllerUpdate
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async commentsControllerUpdate(response: ResponseContext): Promise<any> {
    const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"])
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: any = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "any",
        ""
      ) as any
      return body
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: any = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "any",
        ""
      ) as any
      return body
    }

    throw new ApiException<string | Blob | undefined>(
      response.httpStatusCode,
      "Unknown API Status Code!",
      await response.getBodyAsAny(),
      response.headers
    )
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to googleAuthControllerSignin
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async googleAuthControllerSignin(response: ResponseContext): Promise<any> {
    const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"])
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: any = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "any",
        ""
      ) as any
      return body
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: any = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "any",
        ""
      ) as any
      return body
    }

    throw new ApiException<string | Blob | undefined>(
      response.httpStatusCode,
      "Unknown API Status Code!",
      await response.getBodyAsAny(),
      response.headers
    )
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to googleAuthControllerSignup
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async googleAuthControllerSignup(response: ResponseContext): Promise<any> {
    const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"])
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: any = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "any",
        ""
      ) as any
      return body
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: any = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "any",
        ""
      ) as any
      return body
    }

    throw new ApiException<string | Blob | undefined>(
      response.httpStatusCode,
      "Unknown API Status Code!",
      await response.getBodyAsAny(),
      response.headers
    )
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to itemControllerCreate
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async itemControllerCreate(response: ResponseContext): Promise<any> {
    const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"])
    if (isCodeInRange("201", response.httpStatusCode)) {
      const body: any = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "any",
        ""
      ) as any
      return body
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: any = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "any",
        ""
      ) as any
      return body
    }

    throw new ApiException<string | Blob | undefined>(
      response.httpStatusCode,
      "Unknown API Status Code!",
      await response.getBodyAsAny(),
      response.headers
    )
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to itemControllerFindAll
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async itemControllerFindAll(response: ResponseContext): Promise<Array<any>> {
    const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"])
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: Array<any> = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "Array<any>",
        ""
      ) as Array<any>
      return body
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: Array<any> = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "Array<any>",
        ""
      ) as Array<any>
      return body
    }

    throw new ApiException<string | Blob | undefined>(
      response.httpStatusCode,
      "Unknown API Status Code!",
      await response.getBodyAsAny(),
      response.headers
    )
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to itemControllerFindById
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async itemControllerFindById(response: ResponseContext): Promise<any> {
    const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"])
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: any = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "any",
        ""
      ) as any
      return body
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: any = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "any",
        ""
      ) as any
      return body
    }

    throw new ApiException<string | Blob | undefined>(
      response.httpStatusCode,
      "Unknown API Status Code!",
      await response.getBodyAsAny(),
      response.headers
    )
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to itemControllerRemove
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async itemControllerRemove(response: ResponseContext): Promise<any> {
    const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"])
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: any = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "any",
        ""
      ) as any
      return body
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: any = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "any",
        ""
      ) as any
      return body
    }

    throw new ApiException<string | Blob | undefined>(
      response.httpStatusCode,
      "Unknown API Status Code!",
      await response.getBodyAsAny(),
      response.headers
    )
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to itemControllerUpdate
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async itemControllerUpdate(response: ResponseContext): Promise<any> {
    const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"])
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: any = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "any",
        ""
      ) as any
      return body
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: any = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "any",
        ""
      ) as any
      return body
    }

    throw new ApiException<string | Blob | undefined>(
      response.httpStatusCode,
      "Unknown API Status Code!",
      await response.getBodyAsAny(),
      response.headers
    )
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to itemRatingControllerCreate
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async itemRatingControllerCreate(response: ResponseContext): Promise<any> {
    const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"])
    if (isCodeInRange("201", response.httpStatusCode)) {
      const body: any = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "any",
        ""
      ) as any
      return body
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: any = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "any",
        ""
      ) as any
      return body
    }

    throw new ApiException<string | Blob | undefined>(
      response.httpStatusCode,
      "Unknown API Status Code!",
      await response.getBodyAsAny(),
      response.headers
    )
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to itemRatingControllerGetAvgRating
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async itemRatingControllerGetAvgRating(response: ResponseContext): Promise<any> {
    const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"])
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: any = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "any",
        ""
      ) as any
      return body
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: any = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "any",
        ""
      ) as any
      return body
    }

    throw new ApiException<string | Blob | undefined>(
      response.httpStatusCode,
      "Unknown API Status Code!",
      await response.getBodyAsAny(),
      response.headers
    )
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to typeControllerCreateOne
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async typeControllerCreateOne(response: ResponseContext): Promise<any> {
    const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"])
    if (isCodeInRange("201", response.httpStatusCode)) {
      const body: any = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "any",
        ""
      ) as any
      return body
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: any = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "any",
        ""
      ) as any
      return body
    }

    throw new ApiException<string | Blob | undefined>(
      response.httpStatusCode,
      "Unknown API Status Code!",
      await response.getBodyAsAny(),
      response.headers
    )
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to typeControllerFind
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async typeControllerFind(response: ResponseContext): Promise<any> {
    const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"])
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: any = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "any",
        ""
      ) as any
      return body
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: any = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "any",
        ""
      ) as any
      return body
    }

    throw new ApiException<string | Blob | undefined>(
      response.httpStatusCode,
      "Unknown API Status Code!",
      await response.getBodyAsAny(),
      response.headers
    )
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to typeControllerFindAll
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async typeControllerFindAll(response: ResponseContext): Promise<Array<any>> {
    const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"])
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: Array<any> = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "Array<any>",
        ""
      ) as Array<any>
      return body
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: Array<any> = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "Array<any>",
        ""
      ) as Array<any>
      return body
    }

    throw new ApiException<string | Blob | undefined>(
      response.httpStatusCode,
      "Unknown API Status Code!",
      await response.getBodyAsAny(),
      response.headers
    )
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to typeControllerRemove
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async typeControllerRemove(response: ResponseContext): Promise<any> {
    const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"])
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: any = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "any",
        ""
      ) as any
      return body
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: any = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "any",
        ""
      ) as any
      return body
    }

    throw new ApiException<string | Blob | undefined>(
      response.httpStatusCode,
      "Unknown API Status Code!",
      await response.getBodyAsAny(),
      response.headers
    )
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to typeControllerUpdate
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async typeControllerUpdate(response: ResponseContext): Promise<any> {
    const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"])
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: any = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "any",
        ""
      ) as any
      return body
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: any = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "any",
        ""
      ) as any
      return body
    }

    throw new ApiException<string | Blob | undefined>(
      response.httpStatusCode,
      "Unknown API Status Code!",
      await response.getBodyAsAny(),
      response.headers
    )
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to userControllerEditSelf
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async userControllerEditSelf(response: ResponseContext): Promise<void> {
    const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"])
    if (isCodeInRange("200", response.httpStatusCode)) {
      return
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: void = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "void",
        ""
      ) as void
      return body
    }

    throw new ApiException<string | Blob | undefined>(
      response.httpStatusCode,
      "Unknown API Status Code!",
      await response.getBodyAsAny(),
      response.headers
    )
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to userControllerGetSelf
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async userControllerGetSelf(response: ResponseContext): Promise<void> {
    const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"])
    if (isCodeInRange("200", response.httpStatusCode)) {
      return
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: void = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "void",
        ""
      ) as void
      return body
    }

    throw new ApiException<string | Blob | undefined>(
      response.httpStatusCode,
      "Unknown API Status Code!",
      await response.getBodyAsAny(),
      response.headers
    )
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to userControllerGetUserByUsername
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async userControllerGetUserByUsername(response: ResponseContext): Promise<void> {
    const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"])
    if (isCodeInRange("200", response.httpStatusCode)) {
      return
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: void = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "void",
        ""
      ) as void
      return body
    }

    throw new ApiException<string | Blob | undefined>(
      response.httpStatusCode,
      "Unknown API Status Code!",
      await response.getBodyAsAny(),
      response.headers
    )
  }
}
