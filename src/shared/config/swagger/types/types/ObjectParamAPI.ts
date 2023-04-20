import { ResponseContext, RequestContext, HttpFile } from '../http/http';
import { Configuration} from '../configuration'

import { AddItemDto } from '../models/AddItemDto';
import { AuthDto } from '../models/AuthDto';
import { CreateBrandDto } from '../models/CreateBrandDto';
import { CreateCategoryDto } from '../models/CreateCategoryDto';
import { CreateCommentDto } from '../models/CreateCommentDto';
import { CreateCommentReactionDto } from '../models/CreateCommentReactionDto';
import { CreateItemDto } from '../models/CreateItemDto';
import { CreateItemRatingDto } from '../models/CreateItemRatingDto';
import { CreateTypeDto } from '../models/CreateTypeDto';
import { EditUserDto } from '../models/EditUserDto';
import { SignInDto } from '../models/SignInDto';
import { UpdateBrandDto } from '../models/UpdateBrandDto';
import { UpdateCategoryDto } from '../models/UpdateCategoryDto';
import { UpdateCommentDto } from '../models/UpdateCommentDto';
import { UpdateItemDto } from '../models/UpdateItemDto';
import { UpdateTypeDto } from '../models/UpdateTypeDto';

import { ObservableDefaultApi } from "./ObservableAPI";
import { DefaultApiRequestFactory, DefaultApiResponseProcessor} from "../apis/DefaultApi";

export interface DefaultApiAuthControllerSigninRequest {
    /**
     * 
     * @type SignInDto
     * @memberof DefaultApiauthControllerSignin
     */
    signInDto: SignInDto
}

export interface DefaultApiAuthControllerSignupRequest {
    /**
     * 
     * @type AuthDto
     * @memberof DefaultApiauthControllerSignup
     */
    authDto: AuthDto
}

export interface DefaultApiBrandControllerCreateOneRequest {
    /**
     * 
     * @type CreateBrandDto
     * @memberof DefaultApibrandControllerCreateOne
     */
    createBrandDto: CreateBrandDto
}

export interface DefaultApiBrandControllerFindRequest {
    /**
     * 
     * @type string
     * @memberof DefaultApibrandControllerFind
     */
    name: string
}

export interface DefaultApiBrandControllerFindAllRequest {
}

export interface DefaultApiBrandControllerRemoveRequest {
    /**
     * 
     * @type string
     * @memberof DefaultApibrandControllerRemove
     */
    name: string
}

export interface DefaultApiBrandControllerUpdateRequest {
    /**
     * 
     * @type string
     * @memberof DefaultApibrandControllerUpdate
     */
    name: string
    /**
     * 
     * @type UpdateBrandDto
     * @memberof DefaultApibrandControllerUpdate
     */
    updateBrandDto: UpdateBrandDto
}

export interface DefaultApiCartControllerAddItemRequest {
    /**
     * 
     * @type AddItemDto
     * @memberof DefaultApicartControllerAddItem
     */
    addItemDto: AddItemDto
}

export interface DefaultApiCartControllerEmptyRequest {
}

export interface DefaultApiCartControllerGetAllItemsRequest {
}

export interface DefaultApiCartControllerRemoveItemRequest {
    /**
     * 
     * @type string
     * @memberof DefaultApicartControllerRemoveItem
     */
    itemId: string
}

export interface DefaultApiCartControllerUpdateItemRequest {
    /**
     * 
     * @type string
     * @memberof DefaultApicartControllerUpdateItem
     */
    itemId: string
    /**
     * 
     * @type UpdateItemDto
     * @memberof DefaultApicartControllerUpdateItem
     */
    updateItemDto: UpdateItemDto
}

export interface DefaultApiCategoryControllerCreateOneRequest {
    /**
     * 
     * @type CreateCategoryDto
     * @memberof DefaultApicategoryControllerCreateOne
     */
    createCategoryDto: CreateCategoryDto
}

export interface DefaultApiCategoryControllerFindRequest {
    /**
     * 
     * @type string
     * @memberof DefaultApicategoryControllerFind
     */
    name: string
}

export interface DefaultApiCategoryControllerFindAllRequest {
}

export interface DefaultApiCategoryControllerRemoveRequest {
    /**
     * 
     * @type string
     * @memberof DefaultApicategoryControllerRemove
     */
    name: string
}

export interface DefaultApiCategoryControllerUpdateRequest {
    /**
     * 
     * @type string
     * @memberof DefaultApicategoryControllerUpdate
     */
    name: string
    /**
     * 
     * @type UpdateCategoryDto
     * @memberof DefaultApicategoryControllerUpdate
     */
    updateCategoryDto: UpdateCategoryDto
}

export interface DefaultApiCommentReactionControllerCreateRequest {
    /**
     * 
     * @type string
     * @memberof DefaultApicommentReactionControllerCreate
     */
    id: string
    /**
     * 
     * @type CreateCommentReactionDto
     * @memberof DefaultApicommentReactionControllerCreate
     */
    createCommentReactionDto: CreateCommentReactionDto
}

export interface DefaultApiCommentReactionControllerGetReactionsSumRequest {
    /**
     * 
     * @type string
     * @memberof DefaultApicommentReactionControllerGetReactionsSum
     */
    id: string
}

export interface DefaultApiCommentsControllerCreateRequest {
    /**
     * 
     * @type CreateCommentDto
     * @memberof DefaultApicommentsControllerCreate
     */
    createCommentDto: CreateCommentDto
}

export interface DefaultApiCommentsControllerCreateReplyRequest {
    /**
     * 
     * @type string
     * @memberof DefaultApicommentsControllerCreateReply
     */
    parentId: string
    /**
     * 
     * @type CreateCommentDto
     * @memberof DefaultApicommentsControllerCreateReply
     */
    createCommentDto: CreateCommentDto
}

export interface DefaultApiCommentsControllerFindAllRequest {
}

export interface DefaultApiCommentsControllerRemoveRequest {
    /**
     * 
     * @type string
     * @memberof DefaultApicommentsControllerRemove
     */
    id: string
}

export interface DefaultApiCommentsControllerUpdateRequest {
    /**
     * 
     * @type string
     * @memberof DefaultApicommentsControllerUpdate
     */
    id: string
    /**
     * 
     * @type UpdateCommentDto
     * @memberof DefaultApicommentsControllerUpdate
     */
    updateCommentDto: UpdateCommentDto
}

export interface DefaultApiGoogleAuthControllerSigninRequest {
}

export interface DefaultApiGoogleAuthControllerSignupRequest {
}

export interface DefaultApiItemControllerCreateRequest {
    /**
     * 
     * @type CreateItemDto
     * @memberof DefaultApiitemControllerCreate
     */
    createItemDto: CreateItemDto
}

export interface DefaultApiItemControllerFindAllRequest {
}

export interface DefaultApiItemControllerFindByIdRequest {
    /**
     * 
     * @type string
     * @memberof DefaultApiitemControllerFindById
     */
    id: string
}

export interface DefaultApiItemControllerRemoveRequest {
    /**
     * 
     * @type string
     * @memberof DefaultApiitemControllerRemove
     */
    id: string
}

export interface DefaultApiItemControllerUpdateRequest {
    /**
     * 
     * @type string
     * @memberof DefaultApiitemControllerUpdate
     */
    id: string
    /**
     * 
     * @type UpdateItemDto
     * @memberof DefaultApiitemControllerUpdate
     */
    updateItemDto: UpdateItemDto
}

export interface DefaultApiItemRatingControllerCreateRequest {
    /**
     * 
     * @type string
     * @memberof DefaultApiitemRatingControllerCreate
     */
    id: string
    /**
     * 
     * @type CreateItemRatingDto
     * @memberof DefaultApiitemRatingControllerCreate
     */
    createItemRatingDto: CreateItemRatingDto
}

export interface DefaultApiItemRatingControllerGetAvgRatingRequest {
    /**
     * 
     * @type string
     * @memberof DefaultApiitemRatingControllerGetAvgRating
     */
    id: string
}

export interface DefaultApiTypeControllerCreateOneRequest {
    /**
     * 
     * @type CreateTypeDto
     * @memberof DefaultApitypeControllerCreateOne
     */
    createTypeDto: CreateTypeDto
}

export interface DefaultApiTypeControllerFindRequest {
    /**
     * 
     * @type string
     * @memberof DefaultApitypeControllerFind
     */
    name: string
}

export interface DefaultApiTypeControllerFindAllRequest {
}

export interface DefaultApiTypeControllerRemoveRequest {
    /**
     * 
     * @type string
     * @memberof DefaultApitypeControllerRemove
     */
    name: string
}

export interface DefaultApiTypeControllerUpdateRequest {
    /**
     * 
     * @type string
     * @memberof DefaultApitypeControllerUpdate
     */
    name: string
    /**
     * 
     * @type UpdateTypeDto
     * @memberof DefaultApitypeControllerUpdate
     */
    updateTypeDto: UpdateTypeDto
}

export interface DefaultApiUserControllerEditSelfRequest {
    /**
     * 
     * @type EditUserDto
     * @memberof DefaultApiuserControllerEditSelf
     */
    editUserDto: EditUserDto
}

export interface DefaultApiUserControllerGetSelfRequest {
}

export interface DefaultApiUserControllerGetUserByUsernameRequest {
    /**
     * 
     * @type string
     * @memberof DefaultApiuserControllerGetUserByUsername
     */
    userName: string
}

export class ObjectDefaultApi {
    private api: ObservableDefaultApi

    public constructor(configuration: Configuration, requestFactory?: DefaultApiRequestFactory, responseProcessor?: DefaultApiResponseProcessor) {
        this.api = new ObservableDefaultApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public authControllerSignin(param: DefaultApiAuthControllerSigninRequest, options?: Configuration): Promise<any> {
        return this.api.authControllerSignin(param.signInDto,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public authControllerSignup(param: DefaultApiAuthControllerSignupRequest, options?: Configuration): Promise<any> {
        return this.api.authControllerSignup(param.authDto,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public brandControllerCreateOne(param: DefaultApiBrandControllerCreateOneRequest, options?: Configuration): Promise<any> {
        return this.api.brandControllerCreateOne(param.createBrandDto,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public brandControllerFind(param: DefaultApiBrandControllerFindRequest, options?: Configuration): Promise<any> {
        return this.api.brandControllerFind(param.name,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public brandControllerFindAll(param: DefaultApiBrandControllerFindAllRequest = {}, options?: Configuration): Promise<Array<any>> {
        return this.api.brandControllerFindAll( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public brandControllerRemove(param: DefaultApiBrandControllerRemoveRequest, options?: Configuration): Promise<any> {
        return this.api.brandControllerRemove(param.name,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public brandControllerUpdate(param: DefaultApiBrandControllerUpdateRequest, options?: Configuration): Promise<any> {
        return this.api.brandControllerUpdate(param.name, param.updateBrandDto,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public cartControllerAddItem(param: DefaultApiCartControllerAddItemRequest, options?: Configuration): Promise<any> {
        return this.api.cartControllerAddItem(param.addItemDto,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public cartControllerEmpty(param: DefaultApiCartControllerEmptyRequest = {}, options?: Configuration): Promise<any> {
        return this.api.cartControllerEmpty( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public cartControllerGetAllItems(param: DefaultApiCartControllerGetAllItemsRequest = {}, options?: Configuration): Promise<Array<any>> {
        return this.api.cartControllerGetAllItems( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public cartControllerRemoveItem(param: DefaultApiCartControllerRemoveItemRequest, options?: Configuration): Promise<any> {
        return this.api.cartControllerRemoveItem(param.itemId,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public cartControllerUpdateItem(param: DefaultApiCartControllerUpdateItemRequest, options?: Configuration): Promise<any> {
        return this.api.cartControllerUpdateItem(param.itemId, param.updateItemDto,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public categoryControllerCreateOne(param: DefaultApiCategoryControllerCreateOneRequest, options?: Configuration): Promise<any> {
        return this.api.categoryControllerCreateOne(param.createCategoryDto,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public categoryControllerFind(param: DefaultApiCategoryControllerFindRequest, options?: Configuration): Promise<any> {
        return this.api.categoryControllerFind(param.name,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public categoryControllerFindAll(param: DefaultApiCategoryControllerFindAllRequest = {}, options?: Configuration): Promise<Array<any>> {
        return this.api.categoryControllerFindAll( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public categoryControllerRemove(param: DefaultApiCategoryControllerRemoveRequest, options?: Configuration): Promise<any> {
        return this.api.categoryControllerRemove(param.name,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public categoryControllerUpdate(param: DefaultApiCategoryControllerUpdateRequest, options?: Configuration): Promise<any> {
        return this.api.categoryControllerUpdate(param.name, param.updateCategoryDto,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public commentReactionControllerCreate(param: DefaultApiCommentReactionControllerCreateRequest, options?: Configuration): Promise<any> {
        return this.api.commentReactionControllerCreate(param.id, param.createCommentReactionDto,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public commentReactionControllerGetReactionsSum(param: DefaultApiCommentReactionControllerGetReactionsSumRequest, options?: Configuration): Promise<number> {
        return this.api.commentReactionControllerGetReactionsSum(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public commentsControllerCreate(param: DefaultApiCommentsControllerCreateRequest, options?: Configuration): Promise<any> {
        return this.api.commentsControllerCreate(param.createCommentDto,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public commentsControllerCreateReply(param: DefaultApiCommentsControllerCreateReplyRequest, options?: Configuration): Promise<any> {
        return this.api.commentsControllerCreateReply(param.parentId, param.createCommentDto,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public commentsControllerFindAll(param: DefaultApiCommentsControllerFindAllRequest = {}, options?: Configuration): Promise<Array<any>> {
        return this.api.commentsControllerFindAll( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public commentsControllerRemove(param: DefaultApiCommentsControllerRemoveRequest, options?: Configuration): Promise<any> {
        return this.api.commentsControllerRemove(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public commentsControllerUpdate(param: DefaultApiCommentsControllerUpdateRequest, options?: Configuration): Promise<any> {
        return this.api.commentsControllerUpdate(param.id, param.updateCommentDto,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public googleAuthControllerSignin(param: DefaultApiGoogleAuthControllerSigninRequest = {}, options?: Configuration): Promise<any> {
        return this.api.googleAuthControllerSignin( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public googleAuthControllerSignup(param: DefaultApiGoogleAuthControllerSignupRequest = {}, options?: Configuration): Promise<any> {
        return this.api.googleAuthControllerSignup( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public itemControllerCreate(param: DefaultApiItemControllerCreateRequest, options?: Configuration): Promise<any> {
        return this.api.itemControllerCreate(param.createItemDto,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public itemControllerFindAll(param: DefaultApiItemControllerFindAllRequest = {}, options?: Configuration): Promise<Array<any>> {
        return this.api.itemControllerFindAll( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public itemControllerFindById(param: DefaultApiItemControllerFindByIdRequest, options?: Configuration): Promise<any> {
        return this.api.itemControllerFindById(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public itemControllerRemove(param: DefaultApiItemControllerRemoveRequest, options?: Configuration): Promise<any> {
        return this.api.itemControllerRemove(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public itemControllerUpdate(param: DefaultApiItemControllerUpdateRequest, options?: Configuration): Promise<any> {
        return this.api.itemControllerUpdate(param.id, param.updateItemDto,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public itemRatingControllerCreate(param: DefaultApiItemRatingControllerCreateRequest, options?: Configuration): Promise<any> {
        return this.api.itemRatingControllerCreate(param.id, param.createItemRatingDto,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public itemRatingControllerGetAvgRating(param: DefaultApiItemRatingControllerGetAvgRatingRequest, options?: Configuration): Promise<any> {
        return this.api.itemRatingControllerGetAvgRating(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public typeControllerCreateOne(param: DefaultApiTypeControllerCreateOneRequest, options?: Configuration): Promise<any> {
        return this.api.typeControllerCreateOne(param.createTypeDto,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public typeControllerFind(param: DefaultApiTypeControllerFindRequest, options?: Configuration): Promise<any> {
        return this.api.typeControllerFind(param.name,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public typeControllerFindAll(param: DefaultApiTypeControllerFindAllRequest = {}, options?: Configuration): Promise<Array<any>> {
        return this.api.typeControllerFindAll( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public typeControllerRemove(param: DefaultApiTypeControllerRemoveRequest, options?: Configuration): Promise<any> {
        return this.api.typeControllerRemove(param.name,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public typeControllerUpdate(param: DefaultApiTypeControllerUpdateRequest, options?: Configuration): Promise<any> {
        return this.api.typeControllerUpdate(param.name, param.updateTypeDto,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public userControllerEditSelf(param: DefaultApiUserControllerEditSelfRequest, options?: Configuration): Promise<void> {
        return this.api.userControllerEditSelf(param.editUserDto,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public userControllerGetSelf(param: DefaultApiUserControllerGetSelfRequest = {}, options?: Configuration): Promise<void> {
        return this.api.userControllerGetSelf( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public userControllerGetUserByUsername(param: DefaultApiUserControllerGetUserByUsernameRequest, options?: Configuration): Promise<void> {
        return this.api.userControllerGetUserByUsername(param.userName,  options).toPromise();
    }

}
