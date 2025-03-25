<?php

namespace Feature\UserManagement;

use App\Http\Controllers\Controller;
use App\Actions\UserAction;
use App\Collections\UserCollection;
use App\Http\Requests\UserRequest as RequestsUserRequest;
use App\Traits\JsonResponseTrait;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class UserManagementController extends Controller
{
    use JsonResponseTrait;

    public function __construct(protected UserAction $userAction, protected UserCollection $userCollection) {}

    public function index()
    {
        return Inertia::render('UserManagement/indexPage');
    }

    public function store(RequestsUserRequest $request)
    {
        try {
            DB::beginTransaction();

            $this->userAction->create($request->validated());

            DB::commit();

            return $this->created('User created successfully');
        } catch (\Exception $e) {
            DB::rollBack();
            return $this->error(
                'Failed to create user',
                500,
                $e->getMessage()
            );
        }


        $this->userAction->create($request->validated());
    }

    public function list()
    {
        return response(
            $this->userCollection->paginate(10)
        );
    }

    public function update(RequestsUserRequest $request, $id)
    {
        $this->userAction->update($request->validated(), $id);
    }

    public function destroy($id)
    {
        $this->userAction->delete($id);
    }
}
