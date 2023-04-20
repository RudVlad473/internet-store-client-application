import { DefaultApiRequestFactory, DefaultApiResponseProcessor } from "../apis/DefaultApi"
import { Configuration } from "../configuration"
import { HttpFile, RequestContext, ResponseContext } from "../http/http"
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
import { SignInDto } from "../models/SignInDto"
import { UpdateBrandDto } from "../models/UpdateBrandDto"
import { UpdateCategoryDto } from "../models/UpdateCategoryDto"
import { UpdateCommentDto } from "../models/UpdateCommentDto"
import { UpdateItemDto } from "../models/UpdateItemDto"
import { UpdateTypeDto } from "../models/UpdateTypeDto"
import { ObservableDefaultApi } from "./ObservableAPI"

export class PromiseDefaultApi {
  private api: ObservableDefaultApi

  public constructor(
    configuration: Configuration,
    requestFactory?: DefaultApiRequestFactory,
    responseProcessor?: DefaultApiResponseProcessor
  ) {
    this.api = new ObservableDefaultApi(configuration, requestFactory, responseProcessor)
  }

  /**
   * @param signInDto
   */
  public authControllerSignin(signInDto: SignInDto, _options?: Configuration): Promise<any> {
    const result = this.api.authControllerSignin(signInDto, _options)
    return result.toPromise()
  }

  /**
   * @param authDto
   */
  public authControllerSignup(authDto: AuthDto, _options?: Configuration): Promise<any> {
    const result = this.api.authControllerSignup(authDto, _options)
    return result.toPromise()
  }

  /**
   * @param createBrandDto
   */
  public brandControllerCreateOne(
    createBrandDto: CreateBrandDto,
    _options?: Configuration
  ): Promise<any> {
    const result = this.api.brandControllerCreateOne(createBrandDto, _options)
    return result.toPromise()
  }

  /**
   * @param name
   */
  public brandControllerFind(name: string, _options?: Configuration): Promise<any> {
    const result = this.api.brandControllerFind(name, _options)
    return result.toPromise()
  }

  /**
   */
  public brandControllerFindAll(_options?: Configuration): Promise<Array<any>> {
    const result = this.api.brandControllerFindAll(_options)
    return result.toPromise()
  }

  /**
   * @param name
   */
  public brandControllerRemove(name: string, _options?: Configuration): Promise<any> {
    const result = this.api.brandControllerRemove(name, _options)
    return result.toPromise()
  }

  /**
   * @param name
   * @param updateBrandDto
   */
  public brandControllerUpdate(
    name: string,
    updateBrandDto: UpdateBrandDto,
    _options?: Configuration
  ): Promise<any> {
    const result = this.api.brandControllerUpdate(name, updateBrandDto, _options)
    return result.toPromise()
  }

  /**
   * @param addItemDto
   */
  public cartControllerAddItem(addItemDto: AddItemDto, _options?: Configuration): Promise<any> {
    const result = this.api.cartControllerAddItem(addItemDto, _options)
    return result.toPromise()
  }

  /**
   */
  public cartControllerEmpty(_options?: Configuration): Promise<any> {
    const result = this.api.cartControllerEmpty(_options)
    return result.toPromise()
  }

  /**
   */
  public cartControllerGetAllItems(_options?: Configuration): Promise<Array<any>> {
    const result = this.api.cartControllerGetAllItems(_options)
    return result.toPromise()
  }

  /**
   * @param itemId
   */
  public cartControllerRemoveItem(itemId: string, _options?: Configuration): Promise<any> {
    const result = this.api.cartControllerRemoveItem(itemId, _options)
    return result.toPromise()
  }

  /**
   * @param itemId
   * @param updateItemDto
   */
  public cartControllerUpdateItem(
    itemId: string,
    updateItemDto: UpdateItemDto,
    _options?: Configuration
  ): Promise<any> {
    const result = this.api.cartControllerUpdateItem(itemId, updateItemDto, _options)
    return result.toPromise()
  }

  /**
   * @param createCategoryDto
   */
  public categoryControllerCreateOne(
    createCategoryDto: CreateCategoryDto,
    _options?: Configuration
  ): Promise<any> {
    const result = this.api.categoryControllerCreateOne(createCategoryDto, _options)
    return result.toPromise()
  }

  /**
   * @param name
   */
  public categoryControllerFind(name: string, _options?: Configuration): Promise<any> {
    const result = this.api.categoryControllerFind(name, _options)
    return result.toPromise()
  }

  /**
   */
  public categoryControllerFindAll(_options?: Configuration): Promise<Array<any>> {
    const result = this.api.categoryControllerFindAll(_options)
    return result.toPromise()
  }

  /**
   * @param name
   */
  public categoryControllerRemove(name: string, _options?: Configuration): Promise<any> {
    const result = this.api.categoryControllerRemove(name, _options)
    return result.toPromise()
  }

  /**
   * @param name
   * @param updateCategoryDto
   */
  public categoryControllerUpdate(
    name: string,
    updateCategoryDto: UpdateCategoryDto,
    _options?: Configuration
  ): Promise<any> {
    const result = this.api.categoryControllerUpdate(name, updateCategoryDto, _options)
    return result.toPromise()
  }

  /**
   * @param id
   * @param createCommentReactionDto
   */
  public commentReactionControllerCreate(
    id: string,
    createCommentReactionDto: CreateCommentReactionDto,
    _options?: Configuration
  ): Promise<any> {
    const result = this.api.commentReactionControllerCreate(id, createCommentReactionDto, _options)
    return result.toPromise()
  }

  /**
   * @param id
   */
  public commentReactionControllerGetReactionsSum(
    id: string,
    _options?: Configuration
  ): Promise<number> {
    const result = this.api.commentReactionControllerGetReactionsSum(id, _options)
    return result.toPromise()
  }

  /**
   * @param createCommentDto
   */
  public commentsControllerCreate(
    createCommentDto: CreateCommentDto,
    _options?: Configuration
  ): Promise<any> {
    const result = this.api.commentsControllerCreate(createCommentDto, _options)
    return result.toPromise()
  }

  /**
   * @param parentId
   * @param createCommentDto
   */
  public commentsControllerCreateReply(
    parentId: string,
    createCommentDto: CreateCommentDto,
    _options?: Configuration
  ): Promise<any> {
    const result = this.api.commentsControllerCreateReply(parentId, createCommentDto, _options)
    return result.toPromise()
  }

  /**
   */
  public commentsControllerFindAll(_options?: Configuration): Promise<Array<any>> {
    const result = this.api.commentsControllerFindAll(_options)
    return result.toPromise()
  }

  /**
   * @param id
   */
  public commentsControllerRemove(id: string, _options?: Configuration): Promise<any> {
    const result = this.api.commentsControllerRemove(id, _options)
    return result.toPromise()
  }

  /**
   * @param id
   * @param updateCommentDto
   */
  public commentsControllerUpdate(
    id: string,
    updateCommentDto: UpdateCommentDto,
    _options?: Configuration
  ): Promise<any> {
    const result = this.api.commentsControllerUpdate(id, updateCommentDto, _options)
    return result.toPromise()
  }

  /**
   */
  public googleAuthControllerSignin(_options?: Configuration): Promise<any> {
    const result = this.api.googleAuthControllerSignin(_options)
    return result.toPromise()
  }

  /**
   */
  public googleAuthControllerSignup(_options?: Configuration): Promise<any> {
    const result = this.api.googleAuthControllerSignup(_options)
    return result.toPromise()
  }

  /**
   * @param createItemDto
   */
  public itemControllerCreate(
    createItemDto: CreateItemDto,
    _options?: Configuration
  ): Promise<any> {
    const result = this.api.itemControllerCreate(createItemDto, _options)
    return result.toPromise()
  }

  /**
   */
  public itemControllerFindAll(_options?: Configuration): Promise<Array<any>> {
    const result = this.api.itemControllerFindAll(_options)
    return result.toPromise()
  }

  /**
   * @param id
   */
  public itemControllerFindById(id: string, _options?: Configuration): Promise<any> {
    const result = this.api.itemControllerFindById(id, _options)
    return result.toPromise()
  }

  /**
   * @param id
   */
  public itemControllerRemove(id: string, _options?: Configuration): Promise<any> {
    const result = this.api.itemControllerRemove(id, _options)
    return result.toPromise()
  }

  /**
   * @param id
   * @param updateItemDto
   */
  public itemControllerUpdate(
    id: string,
    updateItemDto: UpdateItemDto,
    _options?: Configuration
  ): Promise<any> {
    const result = this.api.itemControllerUpdate(id, updateItemDto, _options)
    return result.toPromise()
  }

  /**
   * @param id
   * @param createItemRatingDto
   */
  public itemRatingControllerCreate(
    id: string,
    createItemRatingDto: CreateItemRatingDto,
    _options?: Configuration
  ): Promise<any> {
    const result = this.api.itemRatingControllerCreate(id, createItemRatingDto, _options)
    return result.toPromise()
  }

  /**
   * @param id
   */
  public itemRatingControllerGetAvgRating(id: string, _options?: Configuration): Promise<any> {
    const result = this.api.itemRatingControllerGetAvgRating(id, _options)
    return result.toPromise()
  }

  /**
   * @param createTypeDto
   */
  public typeControllerCreateOne(
    createTypeDto: CreateTypeDto,
    _options?: Configuration
  ): Promise<any> {
    const result = this.api.typeControllerCreateOne(createTypeDto, _options)
    return result.toPromise()
  }

  /**
   * @param name
   */
  public typeControllerFind(name: string, _options?: Configuration): Promise<any> {
    const result = this.api.typeControllerFind(name, _options)
    return result.toPromise()
  }

  /**
   */
  public typeControllerFindAll(_options?: Configuration): Promise<Array<any>> {
    const result = this.api.typeControllerFindAll(_options)
    return result.toPromise()
  }

  /**
   * @param name
   */
  public typeControllerRemove(name: string, _options?: Configuration): Promise<any> {
    const result = this.api.typeControllerRemove(name, _options)
    return result.toPromise()
  }

  /**
   * @param name
   * @param updateTypeDto
   */
  public typeControllerUpdate(
    name: string,
    updateTypeDto: UpdateTypeDto,
    _options?: Configuration
  ): Promise<any> {
    const result = this.api.typeControllerUpdate(name, updateTypeDto, _options)
    return result.toPromise()
  }

  /**
   * @param editUserDto
   */
  public userControllerEditSelf(editUserDto: EditUserDto, _options?: Configuration): Promise<void> {
    const result = this.api.userControllerEditSelf(editUserDto, _options)
    return result.toPromise()
  }

  /**
   */
  public userControllerGetSelf(_options?: Configuration): Promise<void> {
    const result = this.api.userControllerGetSelf(_options)
    return result.toPromise()
  }

  /**
   * @param userName
   */
  public userControllerGetUserByUsername(
    userName: string,
    _options?: Configuration
  ): Promise<void> {
    const result = this.api.userControllerGetUserByUsername(userName, _options)
    return result.toPromise()
  }
}
